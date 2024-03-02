'use strict'

var gImgs = []
const gElGallery = document.querySelector('.gallery')
const elSecMemeEditor = document.querySelector('.meme-editor')

function renderGallery() {
    _createImages()
    var strHTML = ''
    strHTML = gImgs.map(img => {
        return `<img src="${img.url}" id="img${img.id}">`
    }).join('')
    gElGallery.innerHTML = strHTML    
    addImgListeners()
    if (gElGallery.style.display === 'none') gElGallery.style.display = 'grid'
    if (elSecMemeEditor.style.display != 'none') elSecMemeEditor.style.display = 'none'
}

function onSelectImg(ev) {
    if (gElGallery.style.display != 'none') gElGallery.style.display = 'none'
    elSecMemeEditor.style.display = 'grid'
    setImg(ev.target)
    setBorderSize()
    renderMeme()
}