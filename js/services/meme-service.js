var gImgs = [{id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']}]
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

function setLineTxt(userTxt) {
    gMeme.lines.txt = userTxt
}