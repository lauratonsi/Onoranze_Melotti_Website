# Onoranze Funebri Melotti — Sito web / Funeral Home Website

🇮🇹 [Italiano](#-italiano) · 🇬🇧 [English](#-english)

![Homepage — Onoranze Funebri Melotti](screenshots/home.png)

![Sezione Necrologi / Obituaries section](screenshots/necrologi.png)

---

## 🇮🇹 Italiano

Sito web su misura, responsive, progettato e sviluppato per un'impresa di onoranze funebri
(Onoranze Funebri Melotti — Edolo, BS), realizzato da zero con HTML, CSS e JavaScript puri.

> ⚠️ **Versione demo.** I nomi e le foto dei defunti sono stati sostituiti con
> **segnaposto fittizi** per tutela della privacy. Il sito di produzione (dati reali) è privato.

### In evidenza
- **Design 100% su misura** — nessun template o page builder: layout, tipografia e animazioni originali
- **Sistema necrologi** — schede dinamiche (ritratto + manifesto completo in lightbox), link al luogo di
  riposo, ordinamento per data — tutto gestibile da **un solo file dati** (`data/necrologi.js`)
- **Performance** — pipeline di ottimizzazione immagini (≈ 80 MB → 15 MB), font self-hosted (nessuna chiamata esterna)
- **Integrazioni** — Google Maps (scheda attività), WhatsApp e telefono, Instagram/Facebook,
  recensioni Google/Facebook, video player inline
- **Form contatti** tramite Netlify Forms (senza backend)
- **GDPR (in produzione)** — banner di consenso cookie (Iubenda), privacy & cookie policy,
  mappe di terze parti bloccate fino al consenso
- **UX** — navbar sticky che si rimpicciolisce, animazioni allo scroll, galleria a mosaico, lightbox

### Tecnologie
`HTML5` · `CSS3` (custom properties, grid & flexbox) · `JavaScript vanilla` · `Netlify` (hosting + Forms)

### Struttura
```
index.html · su-di-noi.html · casa-del-commiato.html · necrologi.html · servizi.html · contatti.html
css/style.css        stili
fonts/               font self-hosted
js/                  main.js · necrologi.js · gallery.js
data/necrologi.js    dati dei necrologi (fittizi in questa demo)
images/ · media/     risorse
```

---

## 🇬🇧 English

Custom, responsive website designed and developed for an Italian funeral home
(Onoranze Funebri Melotti — Edolo, BS), built from scratch with vanilla HTML, CSS and JavaScript.

> ⚠️ **Demo version.** Names and photos of the deceased have been replaced with
> **fictional placeholders** for privacy. The production site (real data) is private.

### Highlights
- **100% custom design** — no templates or page builders; bespoke layout, typography and animations
- **Obituary system** — data-driven cards (portrait + full announcement in a lightbox),
  resting-place links, sorting by date — all editable from a **single data file** (`data/necrologi.js`)
- **Performance** — image optimization pipeline (≈ 80 MB → 15 MB), self-hosted fonts (no third-party calls)
- **Integrations** — Google Maps (business listing), WhatsApp & phone, Instagram/Facebook,
  Google/Facebook reviews, inline video player
- **Contact form** via Netlify Forms (no backend)
- **GDPR (production)** — cookie consent banner (Iubenda), privacy & cookie policy,
  third-party maps blocked until consent
- **UX** — sticky shrinking navbar, scroll-reveal animations, responsive mosaic gallery, lightbox

### Tech stack
`HTML5` · `CSS3` (custom properties, grid & flexbox) · `vanilla JavaScript` · `Netlify` (hosting + Forms)

---

## Autore / Author

**Laura Tonsi** — [github.com/lauratonsi](https://github.com/lauratonsi)
