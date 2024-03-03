'use strict'
var gImgs
const keywordsDB = 'keywordsDB'
var keywordsInit = {
    angry: 0,
    cute: 0,
    political: 0,
    animals: 0,
    baby:0,
    famous: 0,
    israeli: 0,
    television: 0,
    funny: 0,
    man: 0
}

const elSearchKeywords = document.querySelector('.search-keywords')
const gElGallery = document.querySelector('.gallery')
const elSecMemeEditor = document.querySelector('.meme-editor')

function renderGallery() {
    const images = getImages()
    var strHTML = ''
    strHTML = images.map(img => {
        return `<img src="${img.url}" id="img${img.id}">`
    }).join('')
    gElGallery.innerHTML = strHTML    
    addImgListeners()
    if (gElGallery.style.display === 'none') gElGallery.style.display = 'grid'
    if (elSecMemeEditor.style.display != 'none') elSecMemeEditor.style.display = 'none'
}

function onSelectImg(ev) {
    ev.stopPropagation()
    if (gElGallery.style.display != 'none') gElGallery.style.display = 'none'
    elSecMemeEditor.style.display = 'grid'
    setImg(ev.target)
    setBorderSize()
    renderMeme()
}
