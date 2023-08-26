const signinBlock = document.getElementById("signin");
const welcomeBlock = document.getElementById("welcome");
const userIdSpan = document.getElementById("user_id");

const userId = localStorage.getItem("user_id");

if (userId) {
    welcomeBlock.classList.add("welcome_active");
    userIdSpan.textContent = userId;
} else {
    signinBlock.classList.add("signin_active");
}


const signinForm = document.getElementById("signin__form");
const signinBtn = document.getElementById("signin__btn");

signinBtn.addEventListener("click", function(event) {
    event.preventDefault();

    const formData = new FormData(signinForm);

    fetch("https://students.netoservices.ru/nestjs-backend/auth", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            localStorage.setItem("user_id", data.user_id);
            signinBlock.classList.remove("signin_active");
            welcomeBlock.classList.add("welcome_active");
            userIdSpan.textContent = data.user_id;
        } else {
            alert("Неверный логин/пароль");
        }
    })
    .catch(error => {
        console.error("Ошибка при авторизации:", error);
    });
});
