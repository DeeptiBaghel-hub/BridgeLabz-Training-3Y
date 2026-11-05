'use strict';

// Q5 - Display a larger gallery image in a modal; clicks inside do not close it.
if (typeof document === 'undefined') {
  console.log('Q5 requires a browser. Load this script in an HTML page.');
} else {
  const imageUrls = Array.from({ length: 6 }, (_, index) =>
    `https://picsum.photos/id/${101 + index}/800/600`
  );
  const galleryImages = imageUrls.map((url, index) =>
    `<img src="${url}" alt="Gallery image ${index + 1}" data-full="${url}">`
  ).join('');

  document.body.innerHTML = `
    <main class="gallery-app">
      <h1>Image Gallery</h1>
      <div class="gallery">${galleryImages}</div>
      <div class="modal" hidden role="dialog" aria-modal="true" aria-label="Image preview">
        <img class="modal-image" alt="">
        <button class="close-modal" type="button" aria-label="Close preview">Close</button>
      </div>
    </main>
  `;

  const style = document.createElement('style');
  style.textContent = `
    body { font: 16px Arial, sans-serif; margin: 2rem; }
    .gallery-app { max-width: 56rem; margin: auto; }
    .gallery { display: grid; grid-template-columns: repeat(3, 1fr); gap: .75rem; }
    .gallery img { cursor: pointer; height: 10rem; object-fit: cover; width: 100%; }
    .modal { align-items: center; background: rgb(0 0 0 / 80%); inset: 0; justify-content: center; position: fixed; }
    .modal:not([hidden]) { display: flex; }
    .modal-image { max-height: 85vh; max-width: 85vw; object-fit: contain; }
    .close-modal { position: fixed; right: 1rem; top: 1rem; }
  `;
  document.head.append(style);

  const modal = document.querySelector('.modal');
  const modalImage = document.querySelector('.modal-image');

  document.querySelector('.gallery').addEventListener('click', (event) => {
    const image = event.target.closest('img[data-full]');
    if (!image) return;
    modalImage.src = image.dataset.full;
    modalImage.alt = image.alt;
    modal.hidden = false;
  });

  modal.addEventListener('click', () => {
    modal.hidden = true;
  });

  modal.querySelector('img').addEventListener('click', (event) => {
    event.stopPropagation();
  });

  modal.querySelector('.close-modal').addEventListener('click', (event) => {
    event.stopPropagation();
    modal.hidden = true;
  });
}
