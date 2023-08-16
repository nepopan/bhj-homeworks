document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('has-tooltip')) return;

    event.preventDefault();

    let tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        if (tooltip.dataset.tooltipFor === event.target.textContent) {
            tooltip.remove();
            return;
        } else {
            tooltip.remove();
        }
    }

    tooltip = document.createElement('div');
    tooltip.className = 'tooltip tooltip_active';
    tooltip.textContent = event.target.title;
    tooltip.dataset.tooltipFor = event.target.textContent;

    const coords = event.target.getBoundingClientRect();
    tooltip.style.left = coords.left + 'px';
    tooltip.style.top = coords.bottom + 5 + 'px';

    document.body.appendChild(tooltip);
});
