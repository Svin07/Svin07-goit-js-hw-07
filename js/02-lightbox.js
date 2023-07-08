import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const elementsList = document.querySelector(".gallery");



const addImages = galleryItems.map(item => 

`<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>`

).join("");



elementsList.insertAdjacentHTML('beforeend', addImages);

// elementsList.addEventListener('click', onClick);



  const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

