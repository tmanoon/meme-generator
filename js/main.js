'use strict'

function onInit() {
    renderGallery()
    addCanvasListeners()
}

function addCanvasListeners() {
    addCanvasMouseListeners()
    addCanvasTouchListeners()
}

function addCanvasMouseListeners() {
    gElCanvas.addEventListener('mousedown', onCanvasClick)
    gElCanvas.addEventListener('mousemove', onCanvasMove)
    gElCanvas.addEventListener('mouseup', onCanvasUp)
}

function addCanvasTouchListeners() {
    gElCanvas.addEventListener('touchstart', onCanvasClick)
    gElCanvas.addEventListener('touchmove', onCanvasMove)
    gElCanvas.addEventListener('touchend', onCanvasUp)
}

function addImgMouseListeners(img) {
    img.addEventListener('click', onSelectImg)
    // img.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mouseup', onUp)
}

function addImgTouchListeners(img) {
    img.addEventListener('touchstart', onSelectImg)
    // gElCanvas.addEventListener('touchmove', onMove)
    // gElCanvas.addEventListener('touchend', onUp)
}