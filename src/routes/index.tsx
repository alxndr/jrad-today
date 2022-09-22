import { component$, mutable, useClientEffect$, useStylesScoped$, useStore, useWatch$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import ppp from 'papaparse'

import styles from './home.css?inline'
import ConcertInfo from './concertInfo'

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

export default component$(() => {
  useStylesScoped$(styles);
  const nowDateObj = new Date()
  const store = useStore<any>({
    concertData: null,
    day: nowDateObj.getDate(),
    isJsRunning: false,
    month: nowDateObj.getMonth() + 1,
    recordingsData: null,
    todaysConcerts: null,
  })
  useClientEffect$(async () => {
    store.isJsRunning = true
    ppp.parse('https://github.com/alxndr/almost-dead-net/raw/main/src/data/csv/shows.csv',
      {header: true, download: true, worker: false, complete: (results: {data: any}) => {
        store.concertData = results?.data
        ppp.parse('https://github.com/alxndr/almost-dead-net/raw/main/src/data/csv/recordings.csv',
          {header: true, download: true, worker: false, complete: (results: {data: any}) => {
            store.recordingsData = results?.data
          }}
        )
    }})
  })
  useWatch$(async ({track}) => {
    const recordingsData = track(store, 'recordingsData')
    if (!recordingsData) return;
    const day = track(store, 'day')
    const month = track(store, 'month')
    const dateWithoutYear = `${month}/${day}/`
    store.todaysConcerts = store.concertData
      ?.filter?.((concert: {date: string, set1: string}) => concert?.date?.startsWith(dateWithoutYear) && concert.set1) // filtering on set1 means we don't see shows which have not yet occurred... https://github.com/alxndr/jrad-today/issues/1
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
      {store.isJsRunning
        ? store.todaysConcerts
          ? store.todaysConcerts?.length
            ? store.todaysConcerts.map?.((concert: any) =>
                <ConcertInfo data={mutable(concert)} />
              )
            : <>
                <p>Aw, nothing played on this date yet...</p>
              </>
          : <p>Loading...</p>
        : <noscript>
            <p>Get info about a past JRAD concert performed on this day, once you enable JavaScript!</p>
          </noscript>
      }
      {store.isJsRunning && <p>
        Try another date?
        <input name="month" placeholder="month" type="number" min="1" max="12" value={store.month} onClick$={(_event, element: {value: string}) => {
          store.month = Number(element.value)
        }} />
        /
        <input name="day" placeholder="day" type="number" min="1" max="31" value={store.day} onClick$={(_event, element: {value: string}) => {
          store.day = Number(element.value)
        }} />
      </p>}
      <p>Chat about all things JRAD at <a href="https://lot.almost-dead.net/" target="_blank">The Lot</a>!</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Today in JRAD History — #TIJRADH',
};
