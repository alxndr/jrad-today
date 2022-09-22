import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik'

import styles from './concertInfo.css?inline'

export function recordingTypeAbbrev(type: string) {
  switch (type) {
    case 'soundboard': return 'SBD'
    case 'audience': return 'AUD'
    default: return type
  }
}

type ConcertData = {date: string, id: string, recordings: any[], set1: string, tagline: string}

export default component$(({data: {date, id, recordings, set1, tagline}, today}: {data: ConcertData, today: string}) => {
  const store = useStore({
    showSetlist: false,
  })
  useStylesScoped$(styles);
  const showUrl = `https://almost-dead.net/show/${id}`
  const setlistUrl = `https://almost-dead.net/show/embed/${id}`
  if (today === date) {
    return <div class="component-concertInfo-today">
      <h2>There's a show today!!!
        {tagline.slice(tagline.indexOf('@') + 1)}
      </h2>
    </div>
  }
  return <div class="component-concertInfo">
    <h2>
      <a href={showUrl} target="_blank">
        {Number(date.slice(-2)) + 2000}:
        {tagline.slice(tagline.indexOf('@') + 1)}
      </a>
    </h2>
    {set1 // if a set has been played, show available recordings & setlist
      ? <>
          {recordings?.length && <ul class="component-concertInfo--recordings">{recordings.map?.((recording: {type: string, url: string}) =>
            <li><a href={recording.url} target="_blank">{recordingTypeAbbrev(recording.type)}</a></li>
          )}</ul> || false}
          <button onClick$={() => store.showSetlist = !store.showSetlist}>{store.showSetlist ? 'hide' : 'show'} setlist</button>
          {store.showSetlist
            ? <iframe src={setlistUrl}></iframe>
            : false
          }
        </>
      : <p>Coming up!</p>
    }
  </div>
})
