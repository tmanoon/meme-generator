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
    ev.stopPropagation()
    if (gElGallery.style.display != 'none') gElGallery.style.display = 'none'
    elSecMemeEditor.style.display = 'grid'
    setImg(ev.target)
    setBorderSize()
    renderMeme()
}

// ontouchstart="onSelectImg(this, event)" onclick="onSelectImg(this, event)"

function addImgListeners() {
    const images = gElGallery.querySelectorAll('img')
    images.forEach(img => {
        addImgMouseListeners(img)
        addImgTouchListeners(img)
    })
}

function addImgMouseListeners(img) {
    img.addEventListener('click', onSelectImg)
    // img.addEventListener('mousemove', onMove)
    // gElCanvas.addEventListener('mouseup', onUp)
}

function addImgTouchListeners(img) {
    img.addEventListener('touchstart', onSelectImg)
    // gElCanvas.addEventListener('touchmove', onMove)
    // gElCanvas.addEventListener('touchend', onUp)
}

function _createImages() {
    gImgs = []
    for (let i = 1; i <= 18; i++) {
        gImgs.push(_createImage(i, `img/${i}.jpg`, []))
    }
}

function _createImage(id, url, keywords) {
    return {
        id,
        url,
        keywords
    }
}