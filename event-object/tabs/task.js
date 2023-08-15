const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

function tabClickHandler(event) {
    tabs.forEach(tab => tab.classList.remove('tab_active'));
    tabContents.forEach(content => content.classList.remove('tab__content_active'));
    
    event.currentTarget.classList.add('tab_active');
    
    const tabIndex = Array.from(tabs).indexOf(event.currentTarget);
    
    tabContents[tabIndex].classList.add('tab__content_active');
}

tabs.forEach(tab => tab.addEventListener('click', tabClickHandler));
