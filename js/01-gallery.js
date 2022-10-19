import { galleryItems } from './gallery-items.js';
// Change code below this line

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

galleryContainer.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')){
        return
    }

    const currentActiveImageLink = e.target.dataset.source;

    const instance = basicLightbox.create(`<img src="${currentActiveImageLink}" width="800" height="600">`);
    instance.show();

    galleryContainer.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            instance.close();
        };
    });
};
