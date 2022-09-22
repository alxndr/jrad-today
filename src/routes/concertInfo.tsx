import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik'

import styles from './concertInfo.css?inline'

export function recordingTypeAbbrev(type: string) {
  switch (type) {
    case 'soundboard': return 'SBD'
    case 'audience': return 'AUD'
    default: return type
  }
}

export default component$(({data: {date, id, recordings, tagline}}: any) => {
  const store = useStore({
    showSetlist: false,
  })
  useStylesScoped$(styles);
  const showUrl = `https://almost-dead.net/show/${id}`
  const setlistUrl = `https://almost-dead.net/show/embed/${id}`
  return <div class="component-concertInfo">
    <h2>
      <a href={showUrl} target="_blank">
        {Number(date.slice(-2)) + 2000}:
        {tagline.slice(tagline.indexOf('@') + 1)}
      </a>
    </h2>
    {recordings?.length && <ul class="component-concertInfo--recordings">{recordings.map?.((recording: {type: string, url: string}) =>
      <li><a href={recording.url} target="_blank">{recordingTypeAbbrev(recording.type)}</a></li>
    )}</ul> || false}
    <button onClick$={() => store.showSetlist = !store.showSetlist}>{store.showSetlist ? 'hide' : 'show'} setlist</button>
    {store.showSetlist
      ? <iframe src={setlistUrl}></iframe>
      : false
    }
  </div>
})
