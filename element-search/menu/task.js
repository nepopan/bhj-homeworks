const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(link => {
    link.onclick = function(event) {
        const subMenu = link.closest('.menu__item').querySelector('.menu_sub');
        
        if (subMenu) {
            subMenu.classList.toggle('menu_active');
            
            event.preventDefault();
        }
    };
});
