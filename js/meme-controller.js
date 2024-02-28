'use strict'

var gElCanvas = document.querySelector('.canvas')
var gCtx = gElCanvas.getContext('2d')

function renderMeme() {
    const meme = getMeme()
    const images = getImages()
    const img = images.find(image => image.id === meme.selectedImgId)
    const selectedImg = gElGallery.querySelector(`#img${img.id}`)
    coverCanvasWithImg(selectedImg) //I guess the selected image is gonna be later changing at the global object gMeme or something. Now i leave it like this.
    addText(meme.lines[0].txt, gElCanvas.width / 2, 40)
}

function addText(text, textX, textY) {
    const meme = getMeme()
    gCtx.font = `${meme.lines[0].size}px Verdana`
    gCtx.fillStyle = `${meme.lines[0].color}`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(text, textX, textY)
}

function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onChangeText(val) {
    setLineTxt(val)
    renderMeme()
}

function onDownloadClick(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onChangeTxtColor(val) {
    setTxtColor(val)
}