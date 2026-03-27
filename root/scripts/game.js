document.addEventListener("DOMContentLoaded", () => {

    let body = document.body
    let count = 0
    let sinValue

    setInterval(() => {
        sinValue = Math.sin(count)
        count++
        body.style.backgroundColor = "rgb(" + sinValue * 255 + ",0," + sinValue * 255 + " )"
    },100)
})