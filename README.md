# [JRAD.today]

This is the code behind the [Joe Russo's Almost Dead][JRAD] fan site `[JRAD.today]`.

It is powered by [Qwik] and [GitHub Pages].


## Development

Development mode uses [Vite's development server](https://vitejs.dev/). For Qwik during development, the `dev` command will also server-side render (SSR) the output. The client-side development modules loaded by the browser.

```
npm run dev
```

> Note: during dev mode, Vite will request many JS files, which does not represent a Qwik production build.


## Preview

The preview command will create a production build of the client modules, production build of `src/entry.preview.tsx`, and create a local server. The preview server is only for convenience to locally preview a production build, but it should not be used as a production server.

```
npm run preview
```


## Deploying

This generates a SSG build in the `./dist/` subdir, commits it to the `gh-pages` branch, and pushes it. GitHub Actions then will publish those files to [GitHub Pages].

```shell
npm run publish
```


[GitHub Pages]: https://pages.github.com
[JRAD]: http://www.joerussosalmostdead.com
[JRAD.today]: http://jrad.today
[Qwik]: https://qwik.builder.io
