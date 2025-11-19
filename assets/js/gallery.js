// Simple gallery logic shared by all work pages

let currentIndex = 0;

function getThumbnails() {
  return Array.from(document.querySelectorAll('.thumbnails img'));
}

function setCurrentByIndex(index) {
  const thumbs = getThumbnails();
  if (!thumbs.length) return;

  if (index < 0) index = thumbs.length - 1;
  if (index >= thumbs.length) index = 0;

  currentIndex = index;

  const main = document.getElementById('main-image');
  if (!main) return;

  main.src = thumbs[currentIndex].src;

  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === currentIndex);
  });
}

function changeImage(img) {
  const thumbs = getThumbnails();
  const idx = thumbs.indexOf(img);
  if (idx !== -1) {
    setCurrentByIndex(idx);
  }
}

function nextImage() {
  setCurrentByIndex(currentIndex + 1);
}

function prevImage() {
  setCurrentByIndex(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = getThumbnails();
  if (!thumbs.length) return;

  const main = document.getElementById('main-image');
  if (!main) return;

  // Try to match the current main image to a thumbnail
  const matchIndex = thumbs.findIndex(t => t.src === main.src);
  setCurrentByIndex(matchIndex === -1 ? 0 : matchIndex);
});
