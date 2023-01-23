import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return <>
    <script data-goatcounter="https://alxndr.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
    <main>
      <Header />
      <section>
        <Slot />
      </section>
    </main>
    <footer>
      <ul>
        <li><a href="http://www.joerussosalmostdead.com" target="_blank">not officially associated with Joe Russo's Almost Dead</a></li>
        <li>
          <a href="https://almost-dead.net" target="_blank">brought to you by Almost-Dead.net</a>
          <a class="icon github" href="https://github.com/alxndr/jrad-today" title="code repo on GitHub" target="_blank"><kbd>alxndr/jrad-today</kbd></a>
        </li>
      </ul>
    </footer>
  </>;
});
