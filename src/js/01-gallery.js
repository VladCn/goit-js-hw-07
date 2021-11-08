import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const conteiner = document.querySelector('.gallery')
const cards = createColorCards(galleryItems)

conteiner.insertAdjacentHTML("beforeend", cards)
conteiner.addEventListener("click", openModal)
function openModal(evt){
    evt.preventDefault()
    console.log(evt.target)
}

function createColorCards(gallery){
    const markup = gallery.map(({preview, original, description}) => {
        console.log(description)
        return`
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
        })
    return markup.join('')
}

createColorCards(galleryItems)

