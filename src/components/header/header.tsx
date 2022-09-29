import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);
  return <header>
    <a href="/" title="reset to Today">
      <tt>#TIJRADH</tt>
    </a>
  </header>;
});
