'use strict'

var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }, { id: 2, url: '../../img/2.jpg', keywords: ['cute', 'animals'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '', size: 30,
            color: 'white'
        },
        {
            txt: '', size: 30,
            color: 'white'
        }]
}

function getMeme() {
    return gMeme
}

function getImages() {
    return gImgs
}

function setLineTxt(userTxt, line) {
    gMeme.lines[line].txt = userTxt
}

function setImg(elImg) {
    20
    const elImgNumId = elImg.id.slice(-1)
    gMeme.selectedImgId = +elImgNumId
}

function setTxtColor(val) {
    if (elTextInput.classList.contains('line1')) gMeme.lines[1].color = val
    else gMeme.lines[0].color = val
}

function addText(memeLine) {
    addHighlight(memeLine)
    gCtx.font = `${(memeLine.size)}px Verdana`
    if (elTextInput.classList.contains('line1')) {
        gCtx.fillStyle = memeLine.color
        gCtx.fillText(memeLine.txt, 50, gElCanvas.height - 50 , 350)
        gCtx.fillStyle = gMeme.lines[0].color
        gCtx.fillText(gMeme.lines[0].txt, 50, 50, 350)
    } else {
        gCtx.fillStyle = memeLine.color
        gCtx.fillText(memeLine.txt, 50, 50, 350)
    }
}

function addHighlight(memeLine) {
    const idxOfLine = gMeme.lines.findIndex(line => line === memeLine)
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    const bgcImg = gElGallery.querySelector(`#img${gMeme.selectedImgId}`)
    coverCanvasWithImg(bgcImg)
    const yPos = (idxOfLine === 0) ? 47 - memeLine.size : gElCanvas.height - (50 + memeLine.size)
    gCtx.globalAlpha = 0.8
    gCtx.strokeStyle = '#ffffff'
    gCtx.strokeRect(47, yPos, gElCanvas.width - 95, memeLine.size + 10)
    gCtx.globalAlpha = 1.0
}

function setSize(size, line) {
    gMeme.lines[line].size += size
}