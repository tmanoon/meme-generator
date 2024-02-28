'use strict'

const gElGallery = document.querySelector('.gallery')

function renderGallery() {
    if(gElGallery.hidden) gElGallery.hidden = false
    const elSecMemeEditor = document.querySelector('.meme-editor')
    if(!elSecMemeEditor.hidden) elSecMemeEditor.hidden = true
    var strHTML = ''
    strHTML += `<img src="img/1.jpg" id="img1"">
     <img src="img/2.jpg" id="img2">`
    gElGallery.innerHTML = strHTML
}

function onSelectImg(ev) {
    ev.stopPropagation()
    const elSecMemeEditor = document.querySelector('.meme-editor')
    elSecMemeEditor.hidden = false
    setImg(ev.target)
    gElGallery.hidden = true
    renderMeme()
}

// ontouchstart="onSelectImg(this, event)" onclick="onSelectImg(this, event)"