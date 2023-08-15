const rotator = document.querySelector('.rotator');

const cases = rotator.querySelectorAll('.rotator__case');
let currentIndex = 0;

function switchToNextCase() {
    cases[currentIndex].classList.remove('rotator__case_active');
    
    currentIndex++;
    if (currentIndex === cases.length) {
        currentIndex = 0;
    }

    cases[currentIndex].classList.add('rotator__case_active');

    cases[currentIndex].style.color = cases[currentIndex].dataset.color;

    setTimeout(switchToNextCase, cases[currentIndex].dataset.speed);
}

switchToNextCase();
