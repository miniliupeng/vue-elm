window.onresize = setHtmlFontSize
window.onload = setHtmlFontSize

function setHtmlFontSize() {
    const htmlWidth = document.documentElement.clientWidth || document.body.clinentWidth;
    const htmlDom = document.documentElement;
    htmlDom.style.fontSize = htmlWidth / 10 + "px"
}

setHtmlFontSize()