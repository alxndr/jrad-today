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
      brought to you by
      {' '}
      <a href="https://almost-dead.net" target="_blank">Almost-Dead.net</a>
    </footer>
  </>;
});
