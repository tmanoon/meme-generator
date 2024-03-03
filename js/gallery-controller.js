'use strict'

const keywordsDB = 'keywordsDB'

const elSearchKeywords = document.querySelector('.search-keywords')
const gElGallery = document.querySelector('.gallery')
const elSecMemeEditor = document.querySelector('.meme-editor')
const elSearchInput = document.querySelector('.search-pic-input')

function renderGallery() {
    let images = getImgs()
    if(!images) {
        setImages()
        images = getImgs()
    }
    renderKeywords()
    let strHTML = ''
    strHTML = images.map(img => {
        return `<img src="${img.url}" id="img${img.id}">`
    }).join('')
    gElGallery.innerHTML = strHTML
    addImgListeners()
    if (gElGallery.style.display === 'none') gElGallery.style.display = 'grid'
    if (elSecMemeEditor.style.display != 'none') elSecMemeEditor.style.display = 'none'
}

function renderKeywords() {
    const elSearchKeywords = document.querySelector('.search-keywords')
    let strHTML = ''
    let keywords = loadFromStorage(keywordsDB)
    if (!keywords) {
        keywords = getKeywords()
        saveToStorage(keywordsDB, keywords)
    }
    for(let keyword in keywords) {
        strHTML += `<li><button class="btn ${keyword} keyword-btn" onclick="onKeywordBtnClick(event)">${keyword}</button></li>`
    }
    elSearchKeywords.innerHTML = strHTML
}

function onSelectImg(ev) {
    ev.stopPropagation()
    if (gElGallery.style.display != 'none') gElGallery.style.display = 'none'
    elSecMemeEditor.style.display = 'grid'
    setImg(ev.target)
    setBorderSize()
    renderMeme()
}

function onKeywordBtnClick(ev) {
    ev.stopPropagation()
    filterImgs(ev.target.innerText)
    updateKeyword(ev.target.innerText)
    setKeywordSize(ev.target.innerText, ev.target)
    renderGallery()
    saveToStorage(keywordsDB, keywords)
}

function onKeywordInput(ev) {
    ev.stopPropagation()
    filterImgs(ev.target.value)
    updateKeyword(ev.target.value)
    renderGallery()
}
