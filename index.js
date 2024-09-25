import { lyrics } from "/data.js"

let count = 0
let time = 3000

const text = document.getElementById("text")
const clips = document.getElementById("clips")

function changeTextHtml() {
    const newText = lyrics[count]
    count++
    text.classList.remove('fade')
    text.innerHTML = `<h1>${newText}</h1>`
    void text.offsetWidth
    text.classList.add('fade')
}

function getClipsHtml() {
    return images.map(image => `<img src="${image}">`)
}

for (let lyric of lyrics) {
    if (count === 0) {
        changeTextHtml()
    } else {
        setTimeout(changeTextHtml, time)
        time += 3000
    }
}

document.getElementById("clips").innerHTML = 'getClipsHtml()'

