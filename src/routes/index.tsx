import { component$, mutable, useClientEffect$, useStylesScoped$, useStore, useWatch$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import ppp from 'papaparse'

import styles from './home.css?inline'
import ConcertInfo from './concertInfo'

import showsCsv from '../data/shows.csv?raw'
import recordingsCsv from '../data/recordings.csv?raw'
import customDatesCsv from '../data/custom-dates.csv?raw'

export function monthNumToWord(monthNum: number) {
  switch (monthNum) {
    case 1: return 'January';
    case 2: return 'February';
    case 3: return 'March';
    case 4: return 'April';
    case 5: return 'May';
    case 6: return 'June';
    case 7: return 'July';
    case 8: return 'August';
    case 9: return 'September';
    case 10: return 'October';
    case 11: return 'November';
    case 12: return 'December';
    default: throw new Error(`Unrecognized month number: ${monthNum}`)
  }
}

type InputType = {value: string} | any

export function getDay() {
  return new Date().getDate()
}
export function getMonth() {
  return new Date().getMonth() + 1 // don't forget the plus-one
}
export function getYear() {
  return new Date().getFullYear()
}

export function createYearAgnosticDate(month: number, day: number) {
  // use 2000 as it was a leap year
  return new Date(`2000-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}T00:01`)
}

const REGEX = /^(.*)\[([^\]]+)\]\(([^\)]+)\)(.*)$/g
const regexReplacer = (_: string, p1: string, p2: string, p3: string, p4: string) => `${p1}<a href="${p3}">${p2}</a>${p4}`
export function makeLinks(dangerousString: string) {
  if (dangerousString.includes('](')) {
    return <span dangerouslySetInnerHTML={ dangerousString.replace(REGEX, regexReplacer) } />
  }
  return dangerousString
}

export default component$(() => {
  useStylesScoped$(styles);
  const year = getYear()
  const month = getMonth()
  const day = getDay()
  const today = `${month}/${day}/${year}`
  const store = useStore<any>({
    concertData: null,
    concertsOnDate: null,
    day,
    eventsOnDate: [],
    isJsRunning: false,
    month,
    recordingsData: null,
  })
  ppp.parse(customDatesCsv,
    {header: true, worker: false, complete: (results: {data: any}) => {
      store.customDates = results.data
    }})
  useClientEffect$(async () => {
    if (!store.isJsRunning) {
      store.isJsRunning = true
      // first time running in the client... double-check the date
      store.day = getDay()
      store.month = getMonth()
    }
    if (window?.location?.hash) {
      const [hashMonth, hashDay] = window.location.hash.slice(1).split('-').map(Number)
      if (hashMonth >= 1 && hashMonth <= 12 && hashDay >= 1 && hashDay <= 31) {
        store.month = hashMonth
        store.day = hashDay
      }
    }
    ppp.parse(showsCsv,
      {header: true, worker: false, complete: (results: {data: any}) => {
        store.concertData = results?.data
        ppp.parse(recordingsCsv,
          {header: true, worker: false, complete: (results: {data: any}) => {
            store.recordingsData = results?.data
          }}
        )
    }})
  })
  useWatch$(async ({track}) => {
    const concertData = track(store, 'concertData')
    const recordingsData = track(store, 'recordingsData')
    const day = track(store, 'day')
    const month = track(store, 'month')
    const dateWithoutYear = `${month}/${day}/`
    store.concertsOnDate = concertData
      ?.filter?.((concert: {date: string, set1: string}) => concert?.date?.startsWith(dateWithoutYear))
      ?.sort((a: {id: string}, b: {id: string}) => Number(a.id) - Number(b.id))
      ?.map((concert: {id: string}) => ({
        ...concert,
        recordings: recordingsData?.filter?.((recording: {show: string}) => recording.show === concert.id)
      }))
    store.eventsOnDate = store.customDates
      ?.filter?.((eventObj: {date: string, event: string}) => eventObj?.date?.startsWith(dateWithoutYear))
  })

  const isToday = store.day === getDay() && store.month === getMonth()
  const tWord = isToday
    ? 'Today'
    : 'Then'

  return (
    <div class="page-home">
      <h1>
        {tWord} {' '}
        in <a href="http://www.joerussosalmostdead.com" target="_blank">JRAD</a> History: {monthNumToWord(store.month)} {store.day}
      </h1>
      {store.eventsOnDate?.map?.((eventObj: any) => {
        const isAnnual = eventObj.date.endsWith('/')
        const yearPrefix = isAnnual
          ? false
          : <span className="year">{Number(eventObj.date.split('/')[2]) + 2000}</span>
        return <p className="custom">
          {yearPrefix}
          {makeLinks(eventObj.event)}
        </p>
      })}
      {store.concertsOnDate
        ? store.concertsOnDate?.length
          ? store.concertsOnDate.map?.((concert: any) =>
              <ConcertInfo data={mutable(concert)} today={mutable(today)} />
            )
          : <>
              <hr />
              <p>{monthNumToWord(store.month)} {store.day} has always been a day off for JRAD...</p>
            </>
        : <p>Loading...</p>
      }
      {store.isJsRunning && <p class="component-datepicker">
        <span>Try another day?</span>
        <ul>
          <li class="component-datepicker--month">
            <input
              name="month"
              placeholder="month"
              type="number"
              inputMode="decimal"
              min="1"
              max="12"
              value={store.month}
              onInput$={(_event, {value}: InputType) => {
                const monthInput = Number(value)
                const date = createYearAgnosticDate(monthInput, store.day)
                if (date.getDate?.()) {
                  window.location.hash = `${monthInput}-${store.day}`
                  store.month = monthInput
                }
              }}
            />
          </li>
          <li class="component-datepicker--day">
            <input
              name="day"
              placeholder="day"
              type="number"
              inputMode="decimal"
              min="1"
              max="31"
              value={store.day}
              onInput$={(_event, {value}: InputType) => {
                const dayInput = Number(value)
                const date = createYearAgnosticDate(store.month, dayInput)
                if (date.getDate?.()) {
                  window.location.hash = `${store.month}-${dayInput}`
                  store.day = dayInput
                }
              }}
            />
          </li>
        </ul>
        <button class="component-datepicker--day-prev" onClick$={() => {
          const {month, day} = decrementDate({month: store.month, day: store.day})
          store.month = month
          store.day = day
          window.location.hash = `${store.month}-${store.day}`
        }}>day before</button>
        <button class="component-datepicker--day-next" onClick$={() => {
          const {month, day} = incrementDate({month: store.month, day: store.day})
          store.month = month
          store.day = day
          window.location.hash = `${store.month}-${store.day}`
        }}>day after</button>
      </p>}
    </div>
  );
});

export function incrementDate({month, day}) {
  const date = createYearAgnosticDate(month, day)
  date.setDate(date.getDate() + 1)
  return {month: date.getMonth() + 1, day: date.getDate()}
}

export function decrementDate({month, day}) {
  const date = createYearAgnosticDate(month, day)
  date.setDate(date.getDate() - 1)
  return {month: date.getMonth() + 1, day: date.getDate()}
}

export const head: DocumentHead = {
  title: 'Today in JRAD History — #TIJRADH',
  meta: [
    {name: 'title',        content: 'Today in JRAD History'},
    {property: 'og:title', content: 'Today in JRAD History'},
    {name: 'description',        content: 'Find out what Joe Russo\'s Almost Dead has played on each day throughout the calendar. #TIJRADH'},
    {property: 'og:description', content: 'Find out what Joe Russo\'s Almost Dead has played on each day throughout the calendar. #TIJRADH'},
    {property: 'og:image', content: 'https://jrad.today/favicon.png'},
    {property: 'og:type', content: 'website'},
  ],
  links: [],
};
