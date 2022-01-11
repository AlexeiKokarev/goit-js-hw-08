import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const galleryEl = document.querySelector(".gallery");

const gallMarkup = galleryItems
    .map(element => {
        return `<div class="gallery__item">
    <a class="gallery__item" href="${element.original}">
    <img class="gallery__image"
    src="${element.preview}"
     alt="${element.description}" 
     title = "${element.description}" 
    captionDelay = 250ms>
    </a>
    </div>`;
    })
    .join('');

galleryEl.insertAdjacentHTML("afterbegin", gallMarkup);

new SimpleLightbox('.gallery a', { captionType: 'attr', captionDelay: 250, captionsData: 'alt' });