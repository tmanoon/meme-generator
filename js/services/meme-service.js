'use strict'
const elBorder = document.querySelector('.border-of-text')
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ txt: 'Type your text', size: 30, color: 'white', fontFamily: 'Impact', textAlign: 'right' }]
}

function getMeme() {
    return gMeme
}

function getImages() {
    return gImgs
}

function changeTextAlign(alignVal) {
    const currLine = gMeme.lines[gMeme.selectedLineIdx]
    switch (alignVal) {
        case 'right':
            currLine.location.x = gElCanvas.width / 9
            currLine.location.xEnd = currLine.location.x + gCtx.measureText(currLine.txt).width
            break
        case 'center':
            currLine.location.x = gElCanvas.width / 2 - (gCtx.measureText(currLine.txt).width / 2)
            currLine.location.xEnd = currLine.location.x + gCtx.measureText(currLine.txt).width
            break
        case 'left':
            currLine.location.x = (gElCanvas.width - (gElCanvas.width / 9 )) - gCtx.measureText(currLine.txt).width
            currLine.location.xEnd = gElCanvas.width - (gElCanvas.width / 9 )
    }
}

function changeFontSize(size) {
    gMeme.lines[gMeme.selectedLineIdx].size = size
}

function changeFontFamily(fontName) {
    gMeme.lines[gMeme.selectedLineIdx].fontFamily = fontName
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
    gMeme.lines.forEach(line => {
        gCtx.font = `${(line.size)}px ${line.fontFamily}`
        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 4
        gCtx.beginPath()
        // I chose this proportion, 1/9 from each side out of the canvas' width.
        gCtx.fillStyle = line.color
        gCtx.textBaseline = "bottom";
        gCtx.strokeText(line.txt, line.location.x, line.location.y, gElCanvas.width - ((gElCanvas.width / 9) * 2))
        gCtx.fillText(line.txt, line.location.x, line.location.y, gElCanvas.width - ((gElCanvas.width / 9) * 2))
        gCtx.closePath()
    })
}

function addHighlight(memeLine, idx) {
    const top = gElCanvas.width / 9 - memeLine.size + ((gElCanvas.width / 9) * idx)
    elBorder.style.top = top + 'px'
    elBorder.style.width = gElCanvas.width - (2 * (gElCanvas.width / 9)) + 'px'
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
    gMeme.lines.push({ txt: '', size: 30, color: 'white', fontFamily: 'Impact' })
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function addLocations() {
    const lines = gMeme.lines
    for (let i = 0; i < lines.length; i++) {
        if (gMeme.lines[i].location) continue
        lines[i].location = lines[i].location = {
            x: gElCanvas.width / 9,
            y: (gElCanvas.width / 9) + ((gElCanvas.width / 9) * i),
            xEnd: gCtx.measureText(lines[i].txt).width >= 400 ? 400 : gCtx.measureText(lines[i].txt).width,
            yEnd: (gElCanvas.width / 9) * (i + 1)
        }
    }
}


function checkForLine(ev) {
    const clickedX = ev.offsetX
    const clickedY = ev.offsetY
    const lines = gMeme.lines
    if (clickedX > 400 || clickedX < 50) return
    const idxOfSelectedLine = lines.findIndex(line => line.location.y <= clickedY && line.location.yEnd >= clickedY)
    if (idxOfSelectedLine === -1) return
    gMeme.selectedLineIdx = idxOfSelectedLine
}

