'use strict'

var gElCanvas = document.querySelector('.canvas')
var gCtx = gElCanvas.getContext('2d')
const elUserEdits = document.querySelector('.user-edits')

function renderMeme() {
    const meme = getMeme()
    const selectedImg = gElGallery.querySelector(`#img${meme.selectedImgId}`)
    coverCanvasWithImg(selectedImg) //I guess the selected image is gonna be later changing at the global object gMeme or something. Now i leave it like this.
    addText(meme.lines[0], gElCanvas.width / 2, 40)
    addText(meme.lines[1], gElCanvas.width / 2, gElCanvas.height - 40)
}

function addText(memeLine, textX, textY) {
    gCtx.font = `${memeLine.size}px Verdana`
    gCtx.fillStyle = `${memeLine.color}`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    gCtx.fillText(memeLine.txt, textX, textY)
}

function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onChangeText(val, lineNum) {
    setLineTxt(val, lineNum)
    renderMeme()
}

function onDownloadClick(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onChangeTxtColor(val) {
    setTxtColor(val)
}

function onAddLine() {
    const elTextInput = elUserEdits.querySelector('input[type="txt"]')
    elTextInput.oninput = onChangeText(this.value, 1)
}

