'use strict'

const gElGallery = document.querySelector('.gallery')

function renderGallery() {
    var strHTML = ''
    strHTML += `<img src="img/1.jpg" id="img1" ontouchstart="onSelectImg(this)" onclick="onSelectImg(this)">
     <img src="img/2.jpg" id="img2" onclick="onSelectImg(this)">`
    gElGallery.innerHTML = strHTML
}

function onSelectImg(elImg) {
    const elSecMemeEditor = document.querySelector('.meme-editor')
    elSecMemeEditor.hidden = false
    window.addEventListener('resize', () => {
        resizeCanvas()
    })
    gElGallery.hidden = true
    setImg(elImg)
    renderMeme()
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}