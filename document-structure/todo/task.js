const inputElement = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

document.getElementById('tasks__form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskText = inputElement.value.trim();
    
    if (!taskText) {
        return;
    }

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');

    taskElement.innerHTML = `
        <div class="task__title">${taskText}</div>
        <a href="#" class="task__remove">&times;</a>
    `;

    taskElement.querySelector('.task__remove').addEventListener('click', function(event) {
        event.preventDefault();
        tasksList.removeChild(taskElement);
    });

    tasksList.appendChild(taskElement);
    inputElement.value = '';
});
