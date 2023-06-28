import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryAdd = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a></li>`
  )
  .join('');
galleryEl.innerHTML = galleryAdd;

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const imageUrl = target.getAttribute('src');
    openModal(imageUrl);
  }
}

function openModal(imageUrl) {
  const instance = basicLightbox.create(`
    <img src="${imageUrl}" alt="" />
  `);
  instance.show();

  window.addEventListener('keydown', onGalleryEsc);
  function onGalleryEsc(event) {
    if (event.code === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onGalleryEsc);
    }
  }
}


console.log(galleryItems);
