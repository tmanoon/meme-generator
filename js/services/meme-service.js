var gImgs = [{id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']}, {id: 2, url: '../../img/2.jpg', keywords: ['cute', 'animals']}]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel', size: 20,
            color: 'red'
        }]
}

function getMeme() {
    return gMeme
}

function getImages() {
    return gImgs
}

function setLineTxt(userTxt) {
    gMeme.lines.txt = userTxt
}

function setImg(elImg) {
    elImgNumId = elImg.id.substring(3)
    const currSelectedImg = gImgs.find(img => img.url.includes(elImgNumId))
    gMeme.selectedImgId = currSelectedImg.id
}

