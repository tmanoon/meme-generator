'use strict'

var gImgs
var keywords = {
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

function setImg(elImg) {
    const elImgNumId = elImg.id.substring(3)
    gMeme.selectedImgId = +elImgNumId
}

function addImgListeners() {
    const images = gElGallery.querySelectorAll('img')
    images.forEach(img => {
        addImgMouseListeners(img)
        addImgTouchListeners(img)
    })
}

function addImgMouseListeners(img) {
    img.addEventListener('click', onSelectImg)
}

function addImgTouchListeners(img) {
    img.addEventListener('touchstart', onSelectImg)
    
}

function setBorderSize() {
    elBorder.style.width = (gElCanvas.width - 100) + 'px'
}

function setImages() {
    gImgs = []
    gImgs.push({id: 1,url: `img/1.jpg`, keywords: ['angry', 'political']})
    gImgs.push({id: 2,url: `img/2.jpg`, keywords: ['animals', 'cute']})
    gImgs.push({id: 3,url: `img/3.jpg`, keywords: ['baby', 'cute']})
    gImgs.push({id: 4,url: `img/4.jpg`, keywords: ['animals']})
    gImgs.push({id: 5,url: `img/5.jpg`, keywords: ['angry', 'baby']})
    gImgs.push({id: 6,url: `img/6.jpg`, keywords: ['man', 'famous']})
    gImgs.push({id: 7,url: `img/7.jpg`, keywords: ['baby']})
    gImgs.push({id: 8,url: `img/8.jpg`, keywords: ['funny', 'man']})
    gImgs.push({id: 9,url: `img/9.jpg`, keywords: ['baby', 'funny']})
    gImgs.push({id: 10,url: `img/10.jpg`, keywords: ['political', 'funny']})
    gImgs.push({id: 11,url: `img/11.jpg`, keywords: ['famous', 'man']})
    gImgs.push({id: 12,url: `img/12.jpg`, keywords: ['israeli', 'famous', 'television']})
    gImgs.push({id: 13,url: `img/13.jpg`, keywords: ['cute', 'famous']})
    gImgs.push({id: 14,url: `img/14.jpg`, keywords: ['television', 'scary']})
    gImgs.push({id: 15,url: `img/15.jpg`, keywords: ['television', 'famous']})
    gImgs.push({id: 16,url: `img/16.jpg`, keywords: ['funny', 'man', 'television']})
    gImgs.push({id: 17,url: `img/17.jpg`, keywords: ['political', 'man']})
    gImgs.push({id: 18,url: `img/18.jpg`, keywords: ['television', 'cute', 'famous']})
    gImgs.push({id: 19,url: `img/19.jpg`, keywords: ['television', 'man']})
    return gImgs
}

function getKeywords() {
    return keywords
}

function filterImgs(keyword) {
    const regex = new RegExp(keyword, 'i')
    gImgs = setImages() 
    gImgs = gImgs.filter(img => {
        return img.keywords.some(keyword => regex.test(keyword))
    })
}

function getImgs() {
    return gImgs
}

function updateKeyword(keyword) {
    elSearchInput.value = keyword
    keywords[keyword]++
}

function setKeywordSize(keyword) {
    console.log(keyword)
    const keywordBtn = elSearchKeywords.querySelector(`.${keyword}`)
    keywordBtn.style.fontSize = `${keywords[keyword] + 1}em`
    console.log(keywordBtn.style.fontSize,`${keywords[keyword]}` )
}
