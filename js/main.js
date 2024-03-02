'use strict'

function onInit() {
    renderGallery()
    addCanvasListeners()
}

function addCanvasListeners() {
    addCanvasMouseListeners()
    addCanvasTouchListeners()
}

function addCanvasMouseListeners() {
    gElCanvas.addEventListener('mousedown', onCanvasClick)
    gElCanvas.addEventListener('mousemove', onCanvasMove)
    gElCanvas.addEventListener('mouseup', onCanvasUp)
}

function addCanvasTouchListeners() {
    gElCanvas.addEventListener('touchstart', onCanvasClick)
    gElCanvas.addEventListener('touchmove', onCanvasMove)
    gElCanvas.addEventListener('touchend', onCanvasUp)
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

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') 

    function onSuccess(uploadedImgUrl) {
        const url = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&t=${url}`)
    }
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    const formData = new FormData()
    formData.append('img', imgDataUrl)
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        console.log('Got back live url:', url)
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
}
