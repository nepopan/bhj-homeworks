const slides = document.querySelectorAll('.slider__item');
const prevButton = document.querySelector('.slider__arrow_prev');
const nextButton = document.querySelector('.slider__arrow_next');

function getActiveSlide() {
    return Array.from(slides).findIndex(slide => slide.classList.contains('slider__item_active'));
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
