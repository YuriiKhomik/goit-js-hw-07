import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGalleryMarkup(images) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;
    }).join('');
};

const galleryItemsMarkup = createGalleryMarkup(galleryItems);

galleryContainer.innerHTML = galleryItemsMarkup;

// galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

galleryContainer.addEventListener('click', onGalleryItemsClick)

function onGalleryItemsClick(e) {
    if (!e.target.classList.contains('gallery__image')){
        return
    }
    e.preventDefault();

    const currentActiveImageLink = e.target.dataset.source;
    console.log(currentActiveImageLink);
}   

