# Mermaid · Onboarding Prototypes — hosting repo

Static hosting for the **Progressive Intelligent Onboarding** project: the hub,
the full project documentation, and the original wireframes. The source lives on
`main`; the served site is built onto `gh-pages` and published via GitHub Pages.

## Live links

| Page | URL |
| --- | --- |
| **Hub** (entrypoint — launchers, docs link, 3 latest changes) | https://rubenmango.github.io/Mermaid-onboarding-intelliagent-/ |
| **Project documentation** (problem, data, decisions, evolution, what shipped) | https://rubenmango.github.io/Mermaid-onboarding-intelliagent-/documentation/ |
| **Onboarding prototype** (mock AI) | https://rubenmango.github.io/Mermaid-onboarding-intelliagent-/prototype/ |
| **Wireframes** (original mock) | https://rubenmango.github.io/Mermaid-onboarding-intelliagent-/wireframes/ |
| Full app (Vercel, MC team) | https://unified-editor-ten.vercel.app/ |

> GitHub Pages caches HTML for ~10 min — if a page looks stale, hard-refresh with
> **Cmd+Shift+R** (or open a private window).

## What's in this repo (`main`)

| Path | What |
| --- | --- |
| `index.html` | The **hub** — launch cards, the documentation thumbnail + quick links, and the 3 latest changes. |
| `documentation/index.html` | The **full project write-up** — living document, links back to the hub. |
| `wireframes/index.html` | The original wireframe mock. |

The **prototype** under `/prototype/` is **not** in this repo — it's a static
build generated from the app source repo
(`Mermaid-Chart/unified-editor`, onboarding branch) and copied onto `gh-pages`
at deploy time.

## Editing & deploying

- Edit the **hub** in `index.html` and the **documentation** in
  `documentation/index.html` on `main`.
- The `gh-pages` branch is assembled at deploy time: `index.html`,
  `documentation/`, and `wireframes/` come from `main`; `prototype/` comes from
  the app repo's static build. Full redeploy steps live in the app repo's README
  (section: *Redeploy — GitHub Pages*).

## Why two AI behaviours

GitHub Pages is **static** (no server), so the hosted prototype runs a built-in
**client-side mock AI** — the flow works but responses are canned. **Real AI**
needs a functions host (Cloudflare Pages) or a Cloudflare tunnel from an
allowed-network machine; see the app repo's README for details.
