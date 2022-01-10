import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`
    })
    .join('');

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

new SimpleLightbox('.gallery a', { captionType: 'attr', captionDelay: 250, captionsData: 'alt' });