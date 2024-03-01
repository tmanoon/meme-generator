'use strict'

function addCanvasMouseListeners() {
    gElCanvas.addEventListener('click', onCanvasClick)
    gElCanvas.addEventListener('onmousemove', onCanvasMove)
    gElCanvas.addEventListener('onmouseup', onCanvasUp)
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