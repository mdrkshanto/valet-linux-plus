# Valet Linux & Valet Linux+ Documentation Site

A complete, offline-ready static documentation website for **both** local PHP development tools:

- **Valet Linux** — the original [`cpriego/valet-linux`](https://github.com/cpriego/valet-linux), documented from its official `gh-pages` docs and source (`v2.4.5`, 29 commands).
- **Valet Linux+** — the advanced [`genesisweb/valet-linux-plus`](https://github.com/genesisweb/valet-linux-plus), documented from its official docs (archived where the domain is unavailable) and source (`2.0.3`, 45 commands).

Built with plain HTML, Tailwind CSS, and Vue.js. No runtime CDN assets are used: Tailwind CSS is compiled locally and Vue is vendored into the project.

## Features

- 35 documentation sections: a project chooser, side-by-side comparison, migration guide, 9 original Valet Linux guides, and the full 23-section Valet Linux+ reference.
- Separate command references with independent search and category filters: 29 original commands and 45 Linux+ commands.
- `Ctrl/Cmd + K` command palette that finds pages and commands from **both** projects and jumps to the right reference.
- Sidebar navigation, table-of-contents navigation, hash routing, reading progress, and back-to-top control.
- Light/dark theme with local preference storage.
- Copy buttons on every code block, with a fallback for browsers that restrict the Clipboard API.
- Responsive mobile navigation drawer and FAQ accordions for both projects.
- Local favicon/logo and external links that open only when clicked.

## Project structure

```text
.
├── index.html                     # Single-page app shell and all documentation sections
├── assets/
│   ├── css/
│   │   ├── input.css              # Tailwind source + custom component styles
│   │   └── tailwind.css           # Compiled, minified CSS output
│   ├── images/
│   │   ├── favicon.svg
│   │   └── valet-logo.png
│   └── js/
│       ├── app.js                 # Vue app, routing, search, theme, TOC, copy behavior
│       ├── data.js                # Navigation, commands, releases, FAQs and page data
│       └── vendor/
│           └── vue.global.prod.js # Locally vendored Vue 3 global production build
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Development

Build the CSS after changing `index.html`, `assets/js/*.js`, or `assets/css/input.css`, because Tailwind scans those files for class names:

```bash
npm install
npm run build
```

Serve the directory with any static server:

```bash
npm run serve
# or
python3 -m http.server 4173
```

Then open `http://localhost:4173/`. For live Tailwind rebuilds while editing:

```bash
npm run dev
```

## Sources

- Original: <https://github.com/cpriego/valet-linux> · docs: <https://cpriego.github.io/valet-linux/>
- Successor: <https://github.com/genesisweb/valet-linux-plus> · docs domain: <https://valetlinux.plus/> (archived official pages were used because the domain did not resolve at build time)
- Releases and source files were read directly from both repositories to verify versions, commands, configuration paths, supported PHP versions and package/service manager lists.

## License

This documentation site source is provided under the MIT license. Both Valet projects are MIT licensed; see the **License & credits** section in the site for author and link details.
