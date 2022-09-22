import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return <>
    <main>
      <Header />
      <section>
        <Slot />
      </section>
    </main>
    <footer>
      <ul>
        <li><a href="http://www.joerussosalmostdead.com" target="_blank">not officially associated with Joe Russo's Almost Dead</a></li>
        <li><a href="https://almost-dead.net" target="_blank">brought to you by Almost-Dead.net</a></li>
      </ul>
    </footer>
  </>;
});
