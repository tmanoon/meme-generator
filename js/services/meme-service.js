'use strict'
const elBorder = document.querySelector('.border-of-text')
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

function setLineTxt(userTxt) {
    if (elTextInput.classList.contains('line1')) {
        gMeme.lines[1].txt = userTxt
        addHighlight(gMeme.lines[1])
        return
    }
    gMeme.lines[0].txt = userTxt
    addHighlight(gMeme.lines[0])
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

function setText(memeLine) {
    gCtx.font = `${(memeLine.size)}px Verdana`
    gCtx.beginPath()
    gCtx.fillStyle = memeLine.color
    gCtx.beginPath()
    if (memeLine === gMeme.lines[1]) {
        gCtx.fillText(memeLine.txt, 50, gElCanvas.height - 50, 350)
        gCtx.closePath()
    } else {
        gCtx.beginPath()
        gCtx.fillStyle = memeLine.color
        gCtx.fillText(memeLine.txt, 50, 50, 350)
        gCtx.closePath()
    }
}

function addHighlight(memeLine) {
    const idxOfLine = gMeme.lines.findIndex(line => line === memeLine)
    const top = (idxOfLine === 0) ? 50 - memeLine.size : gElCanvas.height - (50 + memeLine.size)
    elBorder.style.top = top + 'px'
    elBorder.style.height = memeLine.size + 'px'
    elBorder.style.opacity = 1
}

function setBorderSize() {
    elBorder.style.width = (gElCanvas.width - 100) + 'px'
}

function removeBorder() {
    elBorder.style.opacity = 0
}

function setSize(size, lineNum) {
    gMeme.lines[lineNum].size += size
}