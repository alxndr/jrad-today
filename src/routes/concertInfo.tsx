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
  useStylesScoped$(styles);

  if (today === date)
    return <div class="component-concertInfo component-concertInfo-today">
      <h2>There’s a show today!!!
        {tagline.slice(tagline.indexOf('@') + 1)}
      </h2>
    </div>

  if (Date.parse(date) > Date.now())
    return <div class="component-concertInfo component-concertInfo-future">
      <h2>
        {Number(date.slice(-2)) + 2000}:
        {tagline.slice(tagline.indexOf('@') + 1)}
      </h2>
      <p>Coming up!</p>
    </div>

  const store = useStore({
    viewSetlist: false,
  })
  return <div class="component-concertInfo">
    <h2>
      <a href={`https://almost-dead.net/show/${id}`} target="_blank">
        {Number(date.slice(-2)) + 2000}:
        {tagline.slice(tagline.indexOf('@') + 1)}
      </a>
    </h2>
    {recordings?.length && <ul class="component-concertInfo--recordings">{recordings.map?.((recording: {type: string, url: string}) =>
      <li><a href={recording.url} target="_blank">{recordingTypeAbbrev(recording.type)}</a></li>
    )}</ul> || false}
    {set1 && <button onClick$={() => store.viewSetlist = !store.viewSetlist}>{store.viewSetlist ? 'hide' : 'show'} setlist</button>}
    {store.viewSetlist
      ? <iframe src={`https://almost-dead.net/show/embed/${id}`}></iframe>
      : false
    }
  </div>
})
