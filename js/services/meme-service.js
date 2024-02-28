var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }, { id: 2, url: '../../img/2.jpg', keywords: ['cute', 'animals'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Type your text', size: 30,
            color: 'black'
        },
        {
            txt: 'Another line', size: 30,
            color: 'black'
        }]
}

function getMeme() {
    return gMeme
}

function getImages() {
    return gImgs
}

function setLineTxt(userTxt) {
    gMeme.lines[0].txt = userTxt
}

function setImg(elImg) {
    const elImgNumId = elImg.id.substring(3)
    const currSelectedImg = gImgs.find(img => img.url.includes(elImgNumId))
    gMeme.selectedImgId = currSelectedImg.id
}

function setTxtColor(val) {
    gMeme.lines.forEach(line => line.color = val)
}