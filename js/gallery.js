// Lightbox per la galleria fotografica
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  if (!overlay) return;

  document.querySelectorAll('.gallery-grid img').forEach(el => {
    el.addEventListener('click', () => {
      img.src = el.src;
      img.alt = el.alt;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    img.src = '';
  }

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
});
