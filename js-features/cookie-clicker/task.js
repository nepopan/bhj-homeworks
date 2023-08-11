const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let isCookieEnlarged = false;

cookie.onclick = function() {
    counter.textContent = parseInt(counter.textContent) + 1;

    if (isCookieEnlarged) {
        cookie.width = 200;
    } else {
        cookie.width = 220;
    }
    isCookieEnlarged = !isCookieEnlarged;
}
