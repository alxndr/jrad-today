import { component$, useClientEffect$, useStylesScoped$, useStore, useWatch$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import ppp from 'papaparse'

import styles from './home.css?inline'
import ConcertInfo from './concertInfo.tsx'

export function monthNumToWord(m) {
  switch (m) {
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
    default: throw new Error('Unrecognized month number: ${m}')
  }
}

export default component$(() => {
  useStylesScoped$(styles);
  const store = useStore({
    isJsRunning: false,
  })
  useClientEffect$(async () => {
    store.isJsRunning = true
    const nowDateObj = new Date()
    const dayNum = 11||nowDateObj.getDate()
    const monthNum = 11||nowDateObj.getMonth() + 1
    store.md = `${monthNum}/${dayNum}`
    store.month_day = `${monthNumToWord(monthNum)} ${dayNum}`
  })
  useWatch$(async ({ track }) => {
    track(store, 'md')
    if (store.md) {
      ppp.parse('https://github.com/alxndr/almost-dead-net/raw/main/src/data/csv/shows.csv', {header: true, download: true, worker: false, complete: (results) => {
        store.concertData = results?.data
        ppp.parse('https://github.com/alxndr/almost-dead-net/raw/main/src/data/csv/recordings.csv', {header: true, download: true, worker: false, complete: (results) => {
          store.recordingsData = results?.data
        }})
      }})
    }
  })
  useWatch$(async ({track}) => {
    track(store, 'recordingsData')
    if (!store.md) return
    const todayWithASlash = `${store.md}/`
    store.todaysConcerts = store.concertData
      ?.filter?.(concert => concert?.date?.startsWith(todayWithASlash) && concert.set1) // filtering on set1 means we don't see shows which have not yet occurred... https://github.com/alxndr/jrad-today/issues/1
      ?.sort((a, b) => a.id - b.id)
      ?.map(concert => ({
        ...concert,
        recordings: store.recordingsData?.filter?.(recording => recording.show === concert.id)
      }))
  })

  return (
    <div class="page-home">
      <h1>Today in <a href="http://www.joerussosalmostdead.com" target="_blank">JRAD</a> History
        {store.month_day ? `: ${store.month_day}` : ''}
      </h1>
      {store.isJsRunning
        ? store.todaysConcerts
          ? store.todaysConcerts?.length
            ? store.todaysConcerts.map?.(concert =>
                <ConcertInfo data={concert} />
              )
            : <>
                <p>Aw, nothing played on this date yet...</p>
              </>
          : <p>Loading...</p>
        : <noscript>
            <p>Get info about a past JRAD concert performed on this day, once you enable JavaScript!</p>
          </noscript>
      }
      <p>Chat about all things JRAD at <a href="https://lot.almost-dead.net/" target="_blank">The Lot</a>!</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Today in JRAD History — #TIJRADH',
};
