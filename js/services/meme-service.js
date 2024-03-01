'use strict'
const elBorder = document.querySelector('.border-of-text')
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ txt: 'Type your text', size: 30, color: 'white' }]
}

function getMeme() {
    return gMeme
}

function getImages() {
    return gImgs
}

function setLineTxt(userTxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = userTxt
    addHighlight(gMeme.lines[gMeme.selectedLineIdx], gMeme.selectedLineIdx)
}

function setImg(elImg) {
    const elImgNumId = elImg.id.substring(3)
    gMeme.selectedImgId = +elImgNumId
}

function setTxtColor(val) {
    gMeme.lines[gMeme.selectedLineIdx].color = val
}

function setText() {
    gMeme.lines.forEach((line, idx) => {
        gCtx.font = `${(line.size)}px Impact`
        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 4
        gCtx.beginPath()
        // I chose this proportion, 1/9 from each side out of the canvas' width.
        gCtx.fillStyle = line.color
        gCtx.textBaseline = "bottom";
        gCtx.strokeText(line.txt, gElCanvas.width / 9, gElCanvas.width / 9 + (idx * 50), gElCanvas.width - ((gElCanvas.width / 9) * 2))
        gCtx.fillText(line.txt, gElCanvas.width / 9, gElCanvas.width / 9 + (idx * 50), gElCanvas.width - ((gElCanvas.width / 9) * 2))
        gCtx.closePath()
    })
}

function addHighlight(memeLine, idx) {
    const top = gElCanvas.width / 9 - memeLine.size + ((gElCanvas.width / 9) * idx)
    elBorder.style.top = top + 'px'
    elBorder.style.width = gElCanvas.width - ( 2* (gElCanvas.width / 9)) + 'px'
    elBorder.style.marginInline = gElCanvas.width / 9 + 'px'
    elBorder.style.height = memeLine.size + 'px'
    elBorder.style.opacity = 1
}

function setBorderSize() {
    elBorder.style.width = (gElCanvas.width - 100) + 'px'
}

function removeBorder() {
    elBorder.style.opacity = 0
}

function setSize(size) {
    const selectedLine = gMeme.lines[gMeme.selectedLineIdx]
    if (selectedLine.location.y >= 5) selectedLine.size += size
}

function setLineIdx(numOfIdx) {
    if (!numOfIdx) gMeme.selectedLineIdx = numOfIdx
    gMeme.selectedLineIdx += numOfIdx
}

function addLine() {
    gMeme.lines.push({ txt: '', size: 30, color: 'white' })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function addLocations() {
    gMeme.lines.forEach((line, idx) => {
        const lines = gMeme.lines
        line.location = {
            x: gElCanvas.width / 9,
            y: (gElCanvas.width / 9 - lines[idx].size) + ((gElCanvas.width / 9) * idx),
            xEnd: gCtx.measureText(lines[idx].txt).width >= 400 ? 400 : gCtx.measureText(lines[idx].txt).width,
            yEnd: (gElCanvas.width / 9) * (idx + 1)
        }
    })
}

function checkForLine(ev) {
    const clickedX = ev.offsetX
    const clickedY = ev.offsetY
    const lines = gMeme.lines
    if (clickedX > 400 || clickedX < 50) return
    const idxOfSelectedLine = lines.findIndex(line => line.location.y <= clickedY && line.location.yEnd >= clickedY)
    if(idxOfSelectedLine === -1) return
    gMeme.selectedLineIdx = idxOfSelectedLine
}

