'use strict'

var gElCanvas = document.querySelector('.canvas')
var gCtx = gElCanvas.getContext('2d')

//needs to ove to the service afterwards, each img will have onselectimg that will call rendermeme from service on it 
function renderMeme() {
    const meme = getMeme()
    coverCanvasWithImg('**?**') //I guess the selected image is gonna be later changing at the global object gMeme or something. Now i leave it like this.
    addText(meme.lines.text)
}

function addText(text) {
    gCtx.font = 'Tahoma'
    gCtx.textAlign = 'center'
    gCtx.strokeText(text, 0, 0)
}

// function onSelectImg(elImg) {
//     coverCanvasWithImg(elImg)
// }

function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onChangeText(val) {
    setLineText(val)
    renderMeme()
}