'use strict'

var gElCanvas = document.querySelector('.canvas')
var gCtx = gElCanvas.getContext('2d')
const elUserEdits = document.querySelector('.user-edits')
const elTextInput = elUserEdits.querySelector('#text-input')

function renderMeme() {
    const meme = getMeme()
    const selectedImg = gElGallery.querySelector(`#img${meme.selectedImgId}`)
    coverCanvasWithImg(selectedImg)
    if (meme.lines[0].txt) setText(meme.lines[0])
    if (meme.lines[1].txt) setText(meme.lines[1])
}

function coverCanvasWithImg(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onChangeText(ev, val) {
    ev.stopPropagation()
    setLineTxt(val)
    renderMeme()
}

function onDownloadClick(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onChangeTxtColor(val, ev) {
    ev.stopPropagation()
    setTxtColor(val)
    renderMeme()
}

function onAddLine(ev) {
    ev.stopPropagation()
    elTextInput.classList.add('line1')
    renderMeme()
}

function onSwitchLine(ev) {
    ev.stopPropagation()
    const meme = getMeme()
    if (!(meme.lines[1].txt)) return
    if (elTextInput.classList.contains('line1')) elTextInput.classList.remove('line1')
    else elTextInput.classList.add('line1')
    renderMeme()
}

function onIncreaseBtn(ev) {
    ev.stopPropagation()
    if (elTextInput.classList.contains('line1'))
        setSize(5, 1)
    else setSize(5, 0)
}

function onDecreaseBtn(ev) {
    ev.stopPropagation()
    if (elTextInput.classList.contains('line1'))
        setSize(-5, 1)
    else setSize(-5, 0)
}