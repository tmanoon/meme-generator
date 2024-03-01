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

function changePosition(val) {
    const currLine = gMeme.lines[gMeme.selectedLineIdx]
    switch (val) {
        case 1:
            if((currLine.location.y + gElCanvas.height / 9) >= gElCanvas.height - (gElCanvas.height / 9)) break
            currLine.location.y += gElCanvas.height / 9
            break
        case -1: 
            if(currLine.location.y <= gElCanvas.height / 9) break
            currLine.location.y -= gElCanvas.height / 9
    }
    currLine.location.yEnd = currLine.location.y + gElCanvas.height / 9
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
    if(gMeme.selectedLineIdx === -1) {
        alert('No lines to type on. Add a line, please.')
        return
    }
    gMeme.lines[gMeme.selectedLineIdx].txt = userTxt
    addHighlight(gMeme.lines[gMeme.selectedLineIdx])
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

function addHighlight(memeLine) {
    const top = memeLine.location.y - memeLine.size - 5
    elBorder.style.top = top + 'px'
    elBorder.style.width = gCtx.measureText(memeLine.txt).width + 'px'
    elBorder.style.left = memeLine.location.x + 'px'
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
    gMeme.selectedLineIdx++
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

function deleteLine() {
    gMeme.selectedLineIdx -= 1
    gMeme.lines.pop()
}

function addEmoji(emoji) {
    gMeme.lines[gMeme.selectedLineIdx].txt += emoji
    elTextInput.value += emoji + ''
}