'use strict'

var gElCanvas = document.querySelector('.canvas')
var gCtx = gElCanvas.getContext('2d')

function renderMeme() {
    const meme = getMeme()
    const images = getImages()
    const img = images.find(image => image.id === meme.selectedImgId)
    const selectedImg = gElGallery.querySelector(`#img${img.id}`)
    coverCanvasWithImg(selectedImg) //I guess the selected image is gonna be later changing at the global object gMeme or something. Now i leave it like this.
    addText(meme.lines.text)
}

function addText(text) {
    gCtx.font = 'Tahoma'
    gCtx.textAlign = 'center'
    gCtx.strokeText(text, 0, 0)
}

function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onChangeText(val) {
    setLineTxt(val)
    renderMeme()
}