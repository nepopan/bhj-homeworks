document.addEventListener("change", (event) => {
    const parentSection = event.target.closest(".interest");
    const childCheckboxes = parentSection.querySelectorAll(".interests_active .interest__check");
    childCheckboxes.forEach(box => box.checked = event.target.checked);
});
