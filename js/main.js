'use strict'

function onInit() {
    renderGallery()
}

function addImgListeners(img) {
    addImgMouseListeners(img)
    addImgTouchListeners(img)
    
}

function addImgMouseListeners(img) {
    img.addEventListener('click',onSelectImg)
    // img.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mouseup', onUp)
}

function addImgTouchListeners(img) {
    img.addEventListener('touchstart', onSelectImg)
    // gElCanvas.addEventListener('touchmove', onMove)
    // gElCanvas.addEventListener('touchend', onUp)
}

