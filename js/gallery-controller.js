'use strict'

const gElGallery = document.querySelector('.gallery')

function renderGallery() {
    var strHTML = ''
    strHTML += `<img src="img/1.jpg" id="img1" ontouchstart="onSelectImg(this)" onclick="onSelectImg(this)">
     <img src="img/2.jpg" id="img2" ontouchstart="onSelectImg(this)" onclick="onSelectImg(this)">`
    gElGallery.innerHTML = strHTML
}

function onSelectImg(elImg) {
    const elSecMemeEditor = document.querySelector('.meme-editor')
    elSecMemeEditor.hidden = false
    gElGallery.hidden = true
    setImg(elImg)
    renderMeme()
}