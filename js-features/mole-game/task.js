const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function() {
        if (this.className.includes('hole_has-mole')) {
            deadCounter.textContent++;
            
            if (deadCounter.textContent == 10) {
                alert('Вы победили!');
                deadCounter.textContent = 0;
                lostCounter.textContent = 0;
            }
        } else {
            lostCounter.textContent++;

            if (lostCounter.textContent == 5) {
                alert('Вы проиграли!');
                deadCounter.textContent = 0;
                lostCounter.textContent = 0;
            }
        }
    }
}
