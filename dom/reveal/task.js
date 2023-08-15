const reveals = document.querySelectorAll('.reveal');

function checkVisibility() {
    for (let reveal of reveals) {
        const viewportHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealBottom = reveal.getBoundingClientRect().bottom;

        if (revealTop < viewportHeight && revealBottom > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    }
}

window.addEventListener('scroll', checkVisibility);
