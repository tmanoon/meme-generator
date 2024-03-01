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
}

function coverCanvasWithImg(elImg) {
    gElCanvas.width = elImg.naturalWidth
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
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
    ev.stopPropagation()
    checkForLine(ev)
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