# Mermaid · Onboarding Prototypes — hosting repo

Static hosting for the **Progressive Intelligent Onboarding** project: the hub,
the full project documentation, the synthetic user test report, and the original
wireframes. The source lives on `main`; the served site is built onto `gh-pages`
and published via GitHub Pages.

## Live links

| Page | URL |
| --- | --- |
| **Hub** (entrypoint — launchers, docs link, research, 3 latest changes) | https://rubenmango.github.io/Mermaid-onboarding-intelliagent-/ |
| **Project documentation** (problem, data, decisions, evolution, what shipped) | https://rubenmango.github.io/Mermaid-onboarding-intelliagent-/documentation/ |
| **Synthetic user test** (6 personas vs the 4 hypotheses) | https://rubenmango.github.io/Mermaid-onboarding-intelliagent-/synthetic-user-test.html |
| **Onboarding prototype** (mock AI) | https://rubenmango.github.io/Mermaid-onboarding-intelliagent-/prototype/ |
| **Wireframes** (original mock) | https://rubenmango.github.io/Mermaid-onboarding-intelliagent-/wireframes/ |
| Full app (Vercel, MC team) | https://unified-editor-ten.vercel.app/ |

> GitHub Pages caches HTML for ~10 min — if a page looks stale, hard-refresh with
> **Cmd+Shift+R** (or open a private window).

## What's in this repo (`main`)

| Path | What |
| --- | --- |
| `index.html` | The **hub** — launch cards, the documentation + research feature cards, quick links, and the 3 latest changes. |
| `documentation/index.html` | The **full project write-up** — living document, links back to the hub. |
| `synthetic-user-test.html` | The **synthetic user test report** — the canonical example of the page style below. |
| `wireframes/index.html` | The original wireframe mock. |

The **prototype** under `/prototype/` is **not** in this repo — it's a static
build generated from the app source repo
(`Mermaid-Chart/unified-editor`, onboarding branch) and copied onto `gh-pages`
at deploy time.

## Documentation style — the `notion-plain-docs` skill

Every page in this repo uses one consistent **"Notion-plain"** style: light and
editorial, white background, a single fixed palette, soft tag pills, light
tables, 6px radius, system font. The goal is that the hub, the docs, and any
report all feel like one family.

That style + the page structures (report, full-doc, and hub layouts) are
packaged as a **shareable Cowork skill, `notion-plain-docs`**, so anyone can
generate matching pages. Drop the `.skill` file into Cowork (Settings →
Capabilities) and ask it to "create a Notion-plain documentation/report page".

**Palette (CSS variables):**

```css
:root{
  --ink:#37352F; --muted:#787774; --faint:#9B9A97;
  --line:#E9E9E7; --line-soft:#EDEDEC; --bg:#FFFFFF; --card:#FFFFFF; --tint:#F7F6F3;
  --pink:#AD1A72; --purple:#5B4FC4;
  --green:#448361; --green-bg:#EDF3EC;
  --amber:#9F6B17; --amber-bg:#FBF3DB;
  --red:#C4554D;   --red-bg:#FBE4E2;
  --gray-bg:#F1F1EF; --radius:6px;
}
```

Rules: white background (no gradients/dark sections), system font stack, centered
content column (~740px for docs/reports, ~820px for the hub), h1 32–36px/700,
sectioned body with 1px divider headers, white bordered cards, tint callouts,
light tables, soft status pills (green = holds, amber = tweak, red = blind spot).

## Editing & deploying

- Edit the **hub** in `index.html` and the **documentation** in
  `documentation/index.html` on `main`.
- The `gh-pages` branch is assembled at deploy time: `index.html`,
  `documentation/`, `synthetic-user-test.html`, and `wireframes/` come from
  `main`; `prototype/` comes from the app repo's static build. Full redeploy
  steps live in the app repo's README (section: *Redeploy — GitHub Pages*).

## Why two AI behaviours

GitHub Pages is **static** (no server), so the hosted prototype runs a built-in
**client-side mock AI** — the flow works but responses are canned. **Real AI**
needs a functions host (Cloudflare Pages) or a Cloudflare tunnel from an
allowed-network machine; see the app repo's README for details.
