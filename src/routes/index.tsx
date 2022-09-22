import { component$, mutable, useClientEffect$, useStylesScoped$, useStore, useWatch$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import ppp from 'papaparse'

import styles from './home.css?inline'
import ConcertInfo from './concertInfo'

import showsCsv from '../data/shows.csv?raw'
import recordingsCsv from '../data/recordings.csv?raw'

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

export default component$(() => {
  useStylesScoped$(styles);
  const nowDateObj = new Date();
  const year = nowDateObj.getFullYear()
  const month = nowDateObj.getMonth() + 1 // don't forget the plus-one
  const day = nowDateObj.getDate()
  const today = `${month}/${day}/${year}`
  const store = useStore<any>({
    concertData: null,
    concertsOnDate: null,
    day: nowDateObj.getDate(),
    isJsRunning: false,
    month: nowDateObj.getMonth() + 1,
    recordingsData: null,
  })
  useClientEffect$(async () => {
    store.isJsRunning = true
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
  })

  const tWord = store.day === new Date().getDate() && store.month - 1 === new Date().getMonth()
    ? 'Today'
    : 'Then'

  return (
    <div class="page-home">
      <h1>
        {tWord} {' '}
        in <a href="http://www.joerussosalmostdead.com" target="_blank">JRAD</a> History: {monthNumToWord(store.month)} {store.day}
      </h1>
      {store.concertsOnDate
        ? store.concertsOnDate?.length
          ? store.concertsOnDate.map?.((concert: any) =>
              <ConcertInfo data={mutable(concert)} today={today} />
            )
          : <>
              <hr />
              <p>{monthNumToWord(store.month)} {store.day} has always been a day off for JRAD...</p>
            </>
        : <p>Loading...</p>
      }
      {store.isJsRunning && <p>
        Try another day?
        <ul class="component-datepicker">
          <li class="component-datepicker--month">
            <input
              name="month"
              placeholder="month"
              type="number"
              min="1"
              max="12"
              value={store.month}
              onInput$={(_event, {value}: InputType) => {
                store.month = Number(value)
              }}
            />
          </li>
          <li class="component-datepicker--day">
            <input
              name="day"
              placeholder="day"
              type="number"
              min="1"
              max="31"
              value={store.day}
              onInput$={(_event, {value}: InputType) => {
                store.day = Number(value)
              }}
            />
          </li>
        </ul>
      </p>}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Today in JRAD History — #TIJRADH',
};
