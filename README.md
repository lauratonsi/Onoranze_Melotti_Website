# Onoranze Funebri Melotti — Funeral Home Website

Custom, responsive website designed and developed for an Italian funeral home
(Onoranze Funebri Melotti — Edolo, BS), built from scratch with vanilla HTML, CSS and JavaScript.

> ⚠️ **Demo version.** Names and photos of the deceased have been replaced with
> **fictional placeholders** for privacy. The production site (real data) is private.

## Highlights

- **100% custom design** — no templates or page builders; bespoke layout, typography and animations
- **Obituary system (`necrologi`)** — data-driven cards (portrait + full announcement in a lightbox),
  resting-place links, sorting by date — all editable from a **single data file** (`data/necrologi.js`)
- **Performance** — image optimization pipeline (≈ 80 MB → 15 MB), self-hosted fonts (no third‑party font calls)
- **Integrations** — Google Maps (business listing), WhatsApp & phone quick actions, Instagram/Facebook,
  Google/Facebook reviews, inline video player
- **Contact form** via Netlify Forms (no backend)
- **GDPR (production)** — cookie consent banner (Iubenda), privacy & cookie policy,
  third‑party maps blocked until consent
- **UX** — sticky shrinking navbar, scroll-reveal animations, responsive mosaic gallery, lightbox

## Tech stack

`HTML5` · `CSS3` (custom properties, grid & flexbox) · `vanilla JavaScript` · `Netlify` (hosting + Forms)

## Project structure

```
index.html · su-di-noi.html · casa-del-commiato.html · necrologi.html · servizi.html · contatti.html
css/style.css        styles
fonts/               self-hosted web fonts
js/                  main.js · necrologi.js · gallery.js
data/necrologi.js    obituary data (fictional in this demo)
images/ · media/     assets
```

## Author

**Laura Tonsi** — [github.com/lauratonsi](https://github.com/lauratonsi)
