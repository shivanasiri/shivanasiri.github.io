function changeImage(thumb) {
  document.getElementById("main-image").src = thumb.src;
}
/* ---------- Lightbox for work-gallery grids ---------- */

let lightboxImages = [];
let lightboxIndex = 0;

function openLightbox(images, index) {
  lightboxImages = images;
  lightboxIndex = index;

  const overlay  = document.getElementById('lightbox');
  const bigImg   = document.getElementById('lightbox-image');
  const caption  = document.getElementById('lightbox-caption');

  const imgEl = lightboxImages[lightboxIndex];

  bigImg.src = imgEl.src;
  bigImg.alt = imgEl.alt || '';

  // Use data-caption if present, otherwise alt text
  const text = imgEl.dataset.caption || imgEl.alt || '';
  caption.textContent = text;

  overlay.classList.add('is-visible');
}

function closeLightbox() {
  const overlay  = document.getElementById('lightbox');
  if (overlay) {
    overlay.classList.remove('is-visible');
  }
}

function showLightboxImage(step) {
  if (!lightboxImages.length) return;

  lightboxIndex = (lightboxIndex + step + lightboxImages.length) % lightboxImages.length;

  const imgEl   = lightboxImages[lightboxIndex];
  const bigImg  = document.getElementById('lightbox-image');
  const caption = document.getElementById('lightbox-caption');

  bigImg.src = imgEl.src;
  bigImg.alt = imgEl.alt || '';

  const text = imgEl.dataset.caption || imgEl.alt || '';
  caption.textContent = text;
}

function nextLightboxImage() {
  showLightboxImage(1);
}

function prevLightboxImage() {
  showLightboxImage(-1);
}

/* Attach click handlers to any .work-gallery grids on the page */
document.addEventListener('DOMContentLoaded', function () {
  const galleries = document.querySelectorAll('.work-gallery');

  galleries.forEach(gallery => {
    const imgs = Array.from(gallery.querySelectorAll('img'));
    imgs.forEach((img, index) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', () => openLightbox(imgs, index));
    });
  });

  // Close on ESC
  document.addEventListener('keydown', e => {
    const overlay = document.getElementById('lightbox');
    if (!overlay || !overlay.classList.contains('is-visible')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightboxImage();
    if (e.key === 'ArrowLeft') prevLightboxImage();
  });

  // Close when clicking outside the image
  const overlay = document.getElementById('lightbox');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        closeLightbox();
      }
    });
  }
});
