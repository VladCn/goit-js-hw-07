import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const conteiner = document.querySelector('.gallery')
const cards = createColorCards(galleryItems)
// const modal = createModal()

conteiner.insertAdjacentHTML("beforeend", cards)
// conteiner.insertAdjacentHTML("beforeend", createModal())
conteiner.addEventListener("click", openModal)

function openModal(evt){
    evt.preventDefault()
    if(!evt.target.classList.contains("gallery__image")){
        return;
    }
    const templateNode = document.querySelector('template')
    if (templateNode) {
        templateNode.remove()
    }

    const origPic = evt.target.getAttribute("data-source")
    const origDisc = evt.target.getAttribute("alt")
    const modalCreate = `<template>
            <div
            class = "modal" >
            <img
            class = "gallery__image"
            src = "${origPic}"
            alt = "${origDisc}"
            />
            </div>
            </template>`


    conteiner.insertAdjacentHTML("beforeend", modalCreate)

    const instance = basicLightbox.create(
        document.querySelector('template')
    )
    instance.show()
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


// < template >
// < div
// className = "modal" >
//     < img
// className = "gallery__image"
// src = "${original}"
// alt = "${description}"
//     / >
//     < /div>
// </template>
