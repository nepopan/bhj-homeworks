const answersContainer = document.getElementById("poll__answers");
const titleElement = document.getElementById("poll__title");

async function displayPoll() {
    try {
        let response = await fetch("https://students.netoservices.ru/nestjs-backend/poll");
        let data = await response.json();

        titleElement.textContent = data.data.title;

        answersContainer.innerHTML = "";

        data.data.answers.forEach((answer, index) => {
            const answerElement = document.createElement("button");
            answerElement.textContent = answer;
            answerElement.className = "poll__answer";
            answerElement.addEventListener("click", () => sendVote(data.id, index));
            answersContainer.appendChild(answerElement);
        });

    } catch (error) {
        console.error("Ошибка при загрузке опроса:", error);
    }
}

async function sendVote(pollId, answerIndex) {
    try {
        let response = await fetch("https://students.netoservices.ru/nestjs-backend/poll", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `vote=${pollId}&answer=${answerIndex}`
        });

        if (response.ok) {
            alert("Спасибо, ваш голос засчитан!");
            displayPoll();
        } else {
            console.error("Ошибка при отправке голоса:", response.statusText);
        }
    } catch (error) {
        console.error("Ошибка при отправке голоса:", error);
    }
}

displayPoll();
