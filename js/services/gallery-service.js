'use strict'

function setImg(elImg) {
    const elImgNumId = elImg.id.substring(3)
    gMeme.selectedImgId = +elImgNumId
}

function getImages() {
    return gImgs
}

function addImgListeners() {
    const images = gElGallery.querySelectorAll('img')
    images.forEach(img => {
        addImgMouseListeners(img)
        addImgTouchListeners(img)
    })
}

function addImgMouseListeners(img) {
    img.addEventListener('click', onSelectImg)
}

function addImgTouchListeners(img) {
    img.addEventListener('touchstart', onSelectImg)
    
}

function _createImages() {
    gImgs = []
    for (let i = 1; i <= 18; i++) {
        gImgs.push(_createImage(i, `img/${i}.jpg`, []))
    }
}

function _createImage(id, url, keywords) {
    return {
        id,
        url,
        keywords
    }
}

// ontouchstart="onSelectImg(this, event)" onclick="onSelectImg(this, event)"

function setBorderSize() {
    elBorder.style.width = (gElCanvas.width - 100) + 'px'
}