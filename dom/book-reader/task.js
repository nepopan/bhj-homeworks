const book = document.getElementById('book');
const fontSizes = document.querySelectorAll('.font-size');

function onFontSizeClick(event) {
    event.preventDefault();

    for (let fontSize of fontSizes) {
        fontSize.classList.remove('font-size_active');
    }

    this.classList.add('font-size_active');

    book.classList.remove('book_fs-big', 'book_fs-small');

    if (this.dataset.size === 'small') {
        book.classList.add('book_fs-small');
    } else if (this.dataset.size === 'big') {
        book.classList.add('book_fs-big');
    }
}

for (let fontSize of fontSizes) {
    fontSize.addEventListener('click', onFontSizeClick);
}
