'use strict'

var gElCanvas = document.querySelector('.canvas')
var gCtx = gElCanvas.getContext('2d')
const elUserEdits = document.querySelector('.user-edits')
const elTextInput = elUserEdits.querySelector('#text-input')

function renderMeme() {
    const meme = getMeme()
    const selectedImg = gElGallery.querySelector(`#img${meme.selectedImgId}`)
    coverCanvasWithImg(selectedImg)
    addLocations()
    setText()
    setLocations()
}

function coverCanvasWithImg(elImg) {
    const imgAspectRatio = elImg.width / elImg.height
    const containerWidth = elSecMemeEditor.querySelector('.canvas-container').offsetWidth
    elImg.width = containerWidth
    const canvasHeight = containerWidth / imgAspectRatio
    gElCanvas.width = containerWidth
    gElCanvas.height = canvasHeight
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    canvasRightBorderSize = gElCanvas.width - (gElCanvas.width / 9)
    canvasLeftBorderSize = gElCanvas.width / 9
    canvasBottomBorderSize = gElCanvas.height - (gElCanvas.height / 9)
    canvasTopBorderSize = gElCanvas.height / 9
}

function onChangeText(ev) {
    ev.stopPropagation()
    setLineTxt(ev.target.value)
    renderMeme()
}

function onDownloadClick(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onChangeTxtColor(ev) {
    ev.stopPropagation()
    setTxtColor(ev.target.value)
    renderMeme()
}

function onAddLine(ev) {
    ev.stopPropagation()
    addLine()
    renderMeme()
}

function onSwitchLine(ev) {
    ev.stopPropagation()
    const meme = getMeme()
    if (!meme.lines[1]) return
    if (meme.selectedLineIdx === meme.lines.length - 1) setLineIdx(0)
    else setLineIdx(1)
    renderMeme()
}

function onSizeBtn(ev, isPosOrNeg) {
    ev.stopPropagation()
    setSize(5 * isPosOrNeg)
    renderMeme()
}

function onCanvasClick(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    checkForSelectedLine(ev)
    renderMeme()
}

function onChangeFontFamily(ev) {
    ev.stopPropagation()
    changeFontFamily(ev.target.value)
    renderMeme()
}

function onChangeFontSize(ev) {
    ev.stopPropagation()
    changeFontSize(ev.target.value)
    renderMeme()
}

function onChangeTextAlign(ev) {
    ev.stopPropagation()
    changeTextAlign(ev.target.value)
}

function onPositionChange(ev, isUpOrDown) {
    ev.stopPropagation()
    changePosition(isUpOrDown)
}

function onDeleteLine(ev) {
    ev.stopPropagation()
    deleteLine()
    renderMeme()
}

function onAddEmoji(ev) {
    ev.stopPropagation()
    addEmoji(ev.target.value)
    renderMeme()
}

function onCanvasMove(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    canvasMove(ev)
    renderMeme()
}

function onCanvasUp(ev) {
    ev.preventDefault()
    ev.stopPropagation()
    canvasUp()
    renderMeme()
}

function onAddLineOnCanvas(ev) {
    addLineOnCanvas(ev)
    renderMeme()
}

function onImFlexible() {
    imFlexible()
    if (gElGallery.style.display != 'none') gElGallery.style.display = 'none'
    elSecMemeEditor.style.display = 'grid'
    setBorderSize()
    renderMeme()
}