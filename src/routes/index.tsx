import { component$, useStylesScoped$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
// import { Link } from '@builder.io/qwik-city';
import styles from './home.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div>
      <h1>Today in <a href="http://www.joerussosalmostdead.com" target="_blank">JRAD</a> History</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Today in JRAD History — #TIJRADH',
};
