'use strict'

var gElCanvas = document.querySelector('.canvas')
var gCtx = gElCanvas.getContext('2d')

//needs to ove to the service afterwards, each img will have onselectimg that will call rendermeme from service on it 
function renderMeme(elImg) {
    coverCanvasWithImg(elImg)
    addText()
}

function addText() {
    gCtx.font = 'Tahoma'
    gCtx.textAlign = 'center'
    gCtx.strokeText('Hello World', 0, 0)
}

function onSelectImg(elImg) {
    coverCanvasWithImg(elImg)
}

function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

