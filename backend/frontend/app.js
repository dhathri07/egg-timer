let timeLeft = 120;

function startTimer() {
    const display = document.getElementById("timer");
    fetch("/start-timer")
        .then(response => response.text())
        .then(data => console.log("C Timer Output:\n", data));

    const interval = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(interval);
            display.textContent = "Time's up!";
            alert("Your egg is ready!");
        }
        timeLeft--;
    }, 1000);
}
