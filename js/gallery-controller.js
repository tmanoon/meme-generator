'use strict'

const gElGallery = document.querySelector('.gallery')

function renderGallery() {
    var strHTML = ''
    strHTML += `<img src="img/1.jpg" id="img1" onclick="onSelectImg(this)">
     <img src="img/2.jpg" id="img2" onclick="onSelectImg(this)">`
    gElGallery.innerHTML = strHTML
}

function onSelectImg(elImg) {
    setImg(elImg)
    renderMeme()
}