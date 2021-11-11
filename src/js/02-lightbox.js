import { galleryItems } from './gallery-items.js';
// Change code below this line


const conteiner = document.querySelector('.gallery')
const cards = createColorCards(galleryItems)

conteiner.insertAdjacentHTML("beforeend", cards)

new SimpleLightbox('.gallery a', {captionsData: "alt", animationSpeed: "250"});


function createColorCards(gallery){
    const markup = gallery.map(({preview, original, description}) => {

        return`
        <div class="gallery__item">  
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div>`
    })

    return markup.join('')
}

createColorCards(galleryItems)
