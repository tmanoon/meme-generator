'use strict'

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem.key)
}

function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}