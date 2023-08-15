document.addEventListener("DOMContentLoaded", function() {
    const modalMain = document.getElementById('modal_main');
    modalMain.classList.add('modal_active');

    const closeButtons = Array.from(document.querySelectorAll('.modal__close'));
    for (let closeButton of closeButtons) {
        closeButton.addEventListener('click', function() {
            this.closest('.modal').classList.remove('modal_active');
        });
    }

    const showSuccessButton = document.querySelector('.show-success');
    const modalSuccess = document.getElementById('modal_success');
    showSuccessButton.addEventListener('click', function(event) {
        event.preventDefault();
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.add('modal_active');
    });
});
