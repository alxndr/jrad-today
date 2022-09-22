import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik'

import styles from './concertInfo.css?inline'

export default component$(({data: {id, recordings, tagline}}) => {
  const store = useStore({
    showSetlist: false,
  })
  useStylesScoped$(styles);
  const showUrl = `https://almost-dead.net/show/${id}`
  const setlistUrl = `https://almost-dead.net/show/embed/${id}`
  return <div class="component-concertInfo">
    <a href={showUrl} target="_blank">
      {tagline}
    </a>
    {recordings?.length && <ul class="component-concertInfo--recordings">{recordings.map?.(recording =>
      <li><a href={recording.url}>{recording.type}</a></li>
    )}</ul>}
    <button onClick$={() => store.showSetlist = !Boolean(store.showSetlist)}>{store.showSetlist ? 'hide' : 'show'} setlist</button>
    {store.showSetlist
      ? <iframe src={setlistUrl}></iframe>
      : false
    }
  </div>
})
