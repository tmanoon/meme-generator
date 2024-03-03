'use strict'
const elBorder = document.querySelector('.border-of-text')
let canvasRightBorderSize
let canvasLeftBorderSize
let canvasBottomBorderSize
let canvasTopBorderSize

var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{ txt: 'Type your text', size: 30, color: 'white', fontFamily: 'Impact', textAlign: 'right' }]
}

let randTxt = ['יא מלעונה', 'תלך כפרה עלי', 'Are you a joke store???', 'A SMOOOOTH criminal', 'Hello, Im Tova Gamzoo', 'Im a genie in a bottle', 'KEVIN POWELL ALL DAY']
let isClicked = false

function getMeme() {
    return gMeme
}

function imFlexible() {
    gMeme.selectedImgId = getRandomIntInclusive(0, gImgs.length - 1)
    getLine(0).txt = randTxt[getRandomIntInclusive(0, randTxt.length - 1)]
}

function changePosition(val) {
    const currLine = getCurrLine()
    switch (val) {
        case 1:
            if ((currLine.location.y + canvasTopBorderSize) >= gElCanvas.height - canvasTopBorderSize) break
            currLine.location.y += canvasTopBorderSize
            break
        case -1:
            if (currLine.location.y <= canvasTopBorderSize) break
            currLine.location.y -= canvasTopBorderSize
    }
    currLine.location.yEnd = currLine.location.y + canvasTopBorderSize
}

function changeTextAlign(alignVal) {
    const currLine = getCurrLine()
    const textWidth = gCtx.measureText(currLine.txt).width
    switch (alignVal) {
        case 'right':
            currLine.location.x = gElCanvas.width - canvasLeftBorderSize - textWidth
            currLine.location.xEnd = gElCanvas.width - canvasLeftBorderSize + textWidth
            break
        case 'center':
            currLine.location.x = (gElCanvas.width - textWidth) / 2
            currLine.location.xEnd = (gElCanvas.width + textWidth) / 2
            break
        case 'left':
            currLine.location.x = canvasLeftBorderSize
            currLine.location.xEnd = canvasLeftBorderSize + textWidth
            break
    }
}

function changeFontSize(size) {
    getCurrLine().size = size
}

function changeFontFamily(fontName) {
    getCurrLine().fontFamily = fontName
}

function setLineTxt(userTxt) {
    if (gMeme.selectedLineIdx === -1) {
        alert('No lines to type on. Add a line, please.')
        return
    }
    getCurrLine().txt = userTxt
    addHighlight(getCurrLine())
}

function setTxtColor(val) {
    getCurrLine().color = val
}

function setText() {
    gMeme.lines.forEach(line=> {
        gCtx.font = `${(line.size)}px ${line.fontFamily}`
        gCtx.strokeStyle = 'black'
        gCtx.lineWidth = 4
        gCtx.beginPath()
        // I chose this proportion, 1/9 from each side out of the canvas' width.
        gCtx.fillStyle = line.color
        gCtx.textBaseline = "top"
        gCtx.strokeText(line.txt, line.location.x, line.location.y, gElCanvas.width - (canvasLeftBorderSize * 2))
        gCtx.fillText(line.txt, line.location.x, line.location.y, gElCanvas.width - (canvasLeftBorderSize * 2))
        gCtx.closePath()
    })
}

function addHighlight(memeLine) {
    const top = memeLine.location.y - 5
    elBorder.style.top = top + 'px'
    elBorder.style.width = gCtx.measureText(memeLine.txt).width + 5 + 'px'
    elBorder.style.left = memeLine.location.x - 5 + 'px'
    elBorder.style.height = memeLine.size + 5 + 'px'
    elBorder.style.opacity = 1
}

function setBorderSize() {
    elBorder.style.width = (gElCanvas.width - 100) + 'px'
}

function removeBorder() {
    elBorder.style.opacity = 0
}

function setSize(size) {
    const selectedLine = getCurrLine()
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
        lines[i].location = {
            x: canvasLeftBorderSize,
            y: canvasTopBorderSize + (canvasTopBorderSize * i),
            xEnd: gCtx.measureText(lines[i].txt).width >= 400 ? 400 : gCtx.measureText(lines[i].txt).width,
            yEnd: canvasTopBorderSize * (i + 1)
        }
    }
}

function checkForSelectedLine(ev) {
    isClicked = true
    const clickedX = ev.offsetX
    const clickedY = ev.offsetY
    const lines = gMeme.lines
    if (clickedX > canvasRightBorderSize || clickedX < canvasLeftBorderSize) return
    const idxOfSelectedLine = lines.findIndex(line => line.location.y <= clickedY && line.location.yEnd >= clickedY)
    if (idxOfSelectedLine === -1) return
    gMeme.selectedLineIdx = idxOfSelectedLine
}

function deleteLine() {
    gMeme.selectedLineIdx -= 1
    gMeme.lines.pop()
}

function addEmoji(emoji) {
    addLine()
    gMeme.selectedLineIdx++
    getCurrLine().txt = emoji
    elTextInput.value += emoji

}

function canvasMove(ev) {
    if (!isClicked) return
    const clickedX = ev.offsetX
    const clickedY = ev.offsetY
    const currLine = getCurrLine()    
    currLine.location.y = clickedY    
    currLine.location.yEnd = currLine.location.y 
    currLine.location.x = clickedX
    currLine.location.xEnd = currLine.location.x + gCtx.measureText(currLine.txt).width

}

function canvasUp() {
    isClicked = false
}

function addLineOnCanvas(ev) {
    const clickedX = ev.offsetX
    const clickedY = ev.offsetY
    elTextInput.value = ''
    addLine()
    const lineAdded = getCurrLine()
    lineAdded.location = {
        x: clickedX,
        y: clickedY,
        xEnd: clickedX,
        yEnd: clickedY
    }
    elTextInput.value = ''
}

function setLocations() {
    gMeme.lines.forEach(line => {
        line.location.xEnd = line.location.x + gCtx.measureText(line.txt).width,
        line.location.yEnd = line.location.y + line.size
    })
}

function getCurrLine() {
    return getCurrLine()
}

function getLine(idx) {
    return gMeme.lines[idx]
}