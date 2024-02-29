'use strict'
const elBorder = document.querySelector('.border-of-text')
var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }, { id: 2, url: '../../img/2.jpg', keywords: ['cute', 'animals'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'tooo', size: 30,
            color: 'white'
        }]
}

function getMeme() {
    return gMeme
}

function getImages() {
    return gImgs
}

// function setLineTxt(userTxt) {
//     if (elTextInput.classList.contains('line1')) {
//         gMeme.lines[1].txt = userTxt
//         addHighlight(gMeme.lines[1])
//         return
//     }
//     gMeme.lines[0].txt = userTxt
//     addHighlight(gMeme.lines[0])
// }

function setLineTxt(userTxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = userTxt
    addHighlight(gMeme.lines[gMeme.selectedLineIdx], gMeme.selectedLineIdx)
}

function setImg(elImg) {
    20
    const elImgNumId = elImg.id.slice(-1)
    gMeme.selectedImgId = +elImgNumId
}

function setTxtColor(val) {
   gMeme.lines[selectedLineIdx].color = val
}

function setText(memeLine, idx) {
    gCtx.font = `${(memeLine.size)}px Verdana`
    gCtx.beginPath()
    gCtx.fillStyle = memeLine.color
    gCtx.fillText(memeLine.txt, 50, 50 + (idx * 50), 350)
    gCtx.closePath()

}

function addHighlight(memeLine, idx) {
    const top = 50 - memeLine.size + (50 * idx)
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

function setLineIdx(numOfIdx) {
    if(!numOfIdx) gMeme.selectedLineIdx = numOfIdx
    gMeme.selectedLineIdx += numOfIdx
}

function addLine() {
    gMeme.lines.push({txt: '', size: 30, color: 'white'})
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}