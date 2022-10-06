let display = document.getElementById("dateAndClockDisplay");
let refreshButton = document.getElementById("refresh");

function updateDateTime() {
    let date = new Date();

    display.innerText = ('0' + date.getDate()).slice(-2) + "."
        + ('0' + (date.getMonth() + 1)).slice(-2) + "."
        + ('0' + date.getFullYear()).slice(-2) + " "
        + ('0' + date.getHours()).slice(-2) + ":"
        + ('0' + date.getMinutes()).slice(-2) + ":"
        + ('0' + date.getSeconds()).slice(-2);
}

refreshButton.addEventListener("click", () => {
    updateDateTime();
})

// timer

let paused = true;

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");


let minDisplay = document.getElementById("minutes");
let secDisplay = document.getElementById("seconds");
let millSecDisplay = document.getElementById("milliseconds");

let stoppedTime = 0;
let lastLoop = new Date();

function start() {
    paused = false;

    startButton.classList.add("blocked");
    stopButton.classList.remove("blocked");
    resetButton.classList.remove("blocked");

    startButton.innerText = "Weiter";
}

function stop() {
    paused = true;

    startButton.classList.remove("blocked");
    stopButton.classList.add("blocked");
}

function reset() {
    paused = true;
    stoppedTime = 0;
    updateTimerDisplay();

    startButton.classList.remove("blocked");
    stopButton.classList.add("blocked");
    resetButton.classList.add("blocked");

    startButton.innerText = "Start";
}

function update() {
    if (paused === false) {
        stoppedTime += new Date() - lastLoop;
        updateTimerDisplay();
    }

    lastLoop = new Date();
    setTimeout(update, 1);
}


function updateTimerDisplay() {
    let millisekunden = stoppedTime % 1000;
    let sekunden = Math.floor(stoppedTime / 1000) % 60;
    let minuten = Math.floor(stoppedTime / 60000) % 60;

    minDisplay.innerText = ('0' + minuten).slice(-2);
    secDisplay.innerText = ('0' + sekunden).slice(-2);
    millSecDisplay.innerText = ('00' + millisekunden).slice(-3);
}

function main() {
    updateDateTime();
    setInterval(updateDateTime, 1000);

    update();
}

main();