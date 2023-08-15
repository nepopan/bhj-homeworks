const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
    const valueElement = dropdown.querySelector(".dropdown__value");
    const listElement = dropdown.querySelector(".dropdown__list");

    valueElement.addEventListener("click", function() {
        listElement.classList.toggle("dropdown__list_active");
    });

    listElement.querySelectorAll(".dropdown__item").forEach((item) => {
        item.addEventListener("click", function(event) {
            event.preventDefault();

            valueElement.textContent = item.querySelector(".dropdown__link").textContent;

            listElement.classList.remove("dropdown__list_active");
        });
    });
});
