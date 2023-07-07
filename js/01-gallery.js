import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const elementsList = document.querySelector(".gallery");



const addImages = galleryItems.map(item => `<li class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</li>`).join("");



elementsList.insertAdjacentHTML('beforeend', addImages);

elementsList.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG')
  return;

  const instance = basicLightbox.create(

    `
    <div class="modal">
    <img src="${evt.target.dataset.source}"/>
    </div>
`
    
);

instance.show();
elementsList.addEventListener('keydown', onEscClose);

function onEscClose(evt) {
  if (evt.code === 'Escape')
  instance.close();
}
}






