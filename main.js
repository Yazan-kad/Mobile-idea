let mainImage = document.querySelector('.main-image');
let body = document.querySelector('body')

function phones(phone) {
    mainImage.src = phone;
}
function colors(color) {
    body.style.background = color;
}