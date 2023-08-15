const slides = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider__arrow_prev');
const nextButton = document.querySelector('.slider__arrow_next');

function getActiveSlide() {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains('slider__item_active')) {
            return i;
        }
    }
}

prevButton.onclick = function() {
    const currentIndex = getActiveSlide();
    slides[currentIndex].classList.remove('slider__item_active'); 

    if (currentIndex === 0) {
        slides[slides.length - 1].classList.add('slider__item_active');
    } else {
        slides[currentIndex - 1].classList.add('slider__item_active');
    }
}

nextButton.onclick = function() {
    const currentIndex = getActiveSlide();
    slides[currentIndex].classList.remove('slider__item_active');

    if (currentIndex === slides.length - 1) {
        slides[0].classList.add('slider__item_active');
    } else {
        slides[currentIndex + 1].classList.add('slider__item_active');
    }
}
