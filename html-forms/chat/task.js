const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');
const messagesContainer = document.getElementById('chat-widget__messages');

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

function addMessage(text, type) {
    const time = new Date().toLocaleTimeString().slice(0, -3);

    let messageHTML = `
        <div class="message ${type === 'client' ? 'message_client' : ''}">
            <div class="message__time">${time}</div>
            <div class="message__text">${text}</div>
        </div>
    `;

    messagesContainer.innerHTML += messageHTML;
}

chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && chatInput.value.trim() !== '') {
        addMessage(chatInput.value, 'client');
        chatInput.value = '';

        const botResponses = [
            'Что вы хотите?',
            'Мы не работаем с такими как вы!',
            'Уйдите и не беспокойте!',
            'Вы еще здесь?',
            'Мы вас не ждали!'
        ];
        const botResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        setTimeout(() => addMessage(botResponse, 'bot'), 1000);
    }
});
