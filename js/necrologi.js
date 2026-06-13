const PLACEHOLDER = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='400'%20height='500'%20viewBox='0%200%20400%20500'%3E%3Crect%20width='400'%20height='500'%20fill='%23f0ece8'/%3E%3Ctext%20x='200'%20y='280'%20font-family='Georgia,serif'%20font-size='90'%20text-anchor='middle'%20fill='%23c8b89a'%3E%E2%9C%9E%3C/text%3E%3C/svg%3E";
const WHATSAPP = "https://wa.me/393395788538";
const CASA_COMMIATO = "Casa del Commiato Melotti";

const ICON_MAIL = "<svg viewBox='0 0 24 24' width='13' height='13' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='5' width='18' height='14' rx='1.5'/><path d='M3.5 7l8.5 6 8.5-6'/></svg>";
const ICON_VIEW = "<svg viewBox='0 0 24 24' width='14' height='14' fill='none' stroke='currentColor' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'><path d='M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z'/><circle cx='12' cy='12' r='3'/></svg>";

// I dati dei defunti vivono in  data/necrologi.js  (window.NECROLOGI).
// Qui ricaviamo i percorsi immagine dallo slug e applichiamo i valori di default.
const RITRATTI_DIR  = "images/necrologi/ritratti/";
const MANIFESTI_DIR = "images/necrologi/";

function normalizza(n) {
  const slug = n.slug || "";
  return {
    nome: n.nome || "",
    sesso: n.sesso || "f",
    dataMorte: n.dataMorte || "",
    testo: n.testo || "",
    luogo: n.luogo || CASA_COMMIATO,
    luogoQuery: n.luogoQuery || "",
    foto: n.foto || (slug ? RITRATTI_DIR + slug + ".jpg" : ""),
    manifesto: n.manifesto || (slug ? MANIFESTI_DIR + slug + ".jpg" : "")
  };
}

const NECROLOGI = (window.NECROLOGI || []).map(normalizza);

function formatData(iso) {
  if (!iso) return null;
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

function mapsUrl(luogo) {
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(luogo);
}

function luogoLink(n) {
  if (n.luogo === CASA_COMMIATO) return { href: "casa-del-commiato.html", target: "" };
  return { href: mapsUrl(n.luogoQuery || n.luogo), target: " target='_blank' rel='noopener'" };
}

function renderCard(n) {
  const foto = n.foto || n.manifesto || PLACEHOLDER;
  const manifesto = n.manifesto || n.foto || '';
  const morte = formatData(n.dataMorte);
  const dateStr = morte ? `† ${morte}` : '';
  const caro = n.sesso === 'm' ? 'Il caro' : 'La cara';
  const primoNome = n.nome.trim().split(/\s+/)[0];
  const link = luogoLink(n);

  const riposo = n.luogo
    ? `<p class="necrologio-riposo">${caro} <span class="rip-nome">${primoNome}</span> riposa presso
         <a href="${link.href}"${link.target}>${n.luogo}</a></p>`
    : '';

  const annuncio = manifesto
    ? `<button type="button" class="necrologio-annuncio" data-manifesto="${manifesto}">${ICON_VIEW} Vedi annuncio</button>`
    : '';

  return `
    <article class="necrologio-card reveal">
      <div class="necrologio-media">
        <img src="${foto}" alt="${n.nome}" data-manifesto="${manifesto}" data-foto="${foto}" />
      </div>
      <div class="necrologio-body">
        <h3 class="necrologio-nome">${n.nome}</h3>
        ${dateStr ? `<p class="necrologio-date">${dateStr}</p>` : ''}
        ${n.testo ? `<p class="necrologio-testo">${n.testo}</p>` : ''}
        ${riposo}
        <div class="necrologio-actions">
          ${annuncio}
          <a class="necrologio-condoglianze" href="${WHATSAPP}" target="_blank" rel="noopener">
            ${ICON_MAIL} Invia condoglianze
          </a>
        </div>
      </div>
    </article>`;
}

function handleBrokenImages(grid) {
  grid.querySelectorAll('.necrologio-media img').forEach(img => {
    const apply = () => {
      // se manca il ritratto, ripiega sul manifesto; poi sul placeholder
      const manifesto = img.dataset.manifesto;
      if (manifesto && img.src.indexOf(manifesto) === -1 && img.dataset.triedManifesto !== '1') {
        img.dataset.triedManifesto = '1';
        img.src = manifesto;
        return;
      }
      img.src = PLACEHOLDER;
      img.classList.add('placeholder');
      img.dataset.noLightbox = '1';
    };
    if (img.complete && img.naturalWidth === 0) apply();
    else img.addEventListener('error', apply);
  });
}

function initLightbox() {
  const overlay = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  if (!overlay) return;

  function open(src, alt) {
    if (!src) return;
    img.src = src;
    img.alt = alt || '';
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  const grid = document.getElementById('necrologi-grid');
  grid.addEventListener('click', function(e) {
    const btn = e.target.closest('.necrologio-annuncio');
    if (btn) { open(btn.dataset.manifesto, 'Annuncio funebre'); return; }
    const pic = e.target.closest('.necrologio-card img');
    if (pic && !pic.dataset.noLightbox) {
      const card = pic.closest('.necrologio-card');
      const nome = card.querySelector('.necrologio-nome');
      open(pic.dataset.manifesto || pic.src, nome ? nome.textContent : '');
    }
  });

  function closeLightbox() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    img.src = '';
  }
  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
}

function loadNecrologi() {
  const grid = document.getElementById('necrologi-grid');
  if (!grid) return;

  let data = [...NECROLOGI];
  data.sort((a, b) => {
    if (!a.dataMorte) return 1;
    if (!b.dataMorte) return -1;
    return b.dataMorte.localeCompare(a.dataMorte);
  });

  // In homepage (o dove specificato) mostra solo gli ultimi N
  const limit = parseInt(grid.dataset.limit, 10);
  if (limit > 0) data = data.slice(0, limit);

  grid.innerHTML = data.map(renderCard).join('');
  handleBrokenImages(grid);
  initLightbox();
  revealCards(grid);
}

function revealCards(grid) {
  const cards = grid.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    cards.forEach((c, i) => { c.style.transitionDelay = `${(i % 4) * 0.1}s`; io.observe(c); });
  } else {
    cards.forEach(c => c.classList.add('in'));
  }
}

document.addEventListener('DOMContentLoaded', loadNecrologi);
