const form = document.getElementById('form');
const progressElement = document.getElementById('progress');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
    
    xhr.upload.onprogress = function(event) {
        progressElement.value = event.loaded / event.total;
    };
    
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            alert('Файл успешно загружен!');
        } else {
            alert('Произошла ошибка при загрузке файла.');
        }
    };
    
    xhr.send(formData);
});
