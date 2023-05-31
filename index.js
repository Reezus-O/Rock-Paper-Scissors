// Variables
let options = document.querySelectorAll(".picks");
let yourPick;
let computerPick;
let outcome;
let outcomeElement = document.querySelector(".outcome")
let movesElement = document.querySelector(".moves")

// Objects
let scores = JSON.parse(localStorage.getItem("scores")) || {
    wins: 0,
    losses: 0,
    Ties: 0
};

document.querySelector(".wins").innerText = (`${scores.wins}`)
document.querySelector(".losses").innerText = (`${scores.losses}`)
document.querySelector(".ties").innerText = (`${scores.Ties}`)

// Functions
function computer() {
    let randomNumber = Math.ceil(Math.random() * 3);

    if (randomNumber === 1) {
        computerPick = "Rock";
    } else if (randomNumber === 2) {
        computerPick = "Paper";
    } else if (randomNumber = 3) {
        computerPick = "Scissors";
    }
}

function play() {
    if (yourPick === computerPick) {
        outcome = "It's a Tie"
    } else if (yourPick === "Rock" && computerPick === "Paper") {
        outcome = "You Lose :(";
    } else if (yourPick === "Rock" && computerPick === "Scissors") {
        outcome = "You Win :)";
    } else if (yourPick === "Paper" && computerPick === "Rock") {
        outcome = "You Win :)";
    } else if (yourPick === "Paper" && computerPick === "Scissors") {
        outcome = "You Lose :(";
    } else if (yourPick === "Scissors" && computerPick === "Rock") {
        outcome = "You Lose :(";
    } else if (yourPick === "Scissors" && computerPick === "Paper") {
        outcome = "You Win :)";
    }
}

function scoreTracker() {
    if (outcome === "It's a Tie") {
        scores.Ties++;
    } else if (outcome === "You Lose :(") {
        scores.losses++;
    } else if (outcome === "You Win :)") {
        scores.wins++;
    }
    localStorage.setItem("scores", JSON.stringify(scores));
}

function showResult() {
    outcomeElement.innerText = (`${outcome}`)
    document.querySelector(".your-move").innerText = (`${yourPick}`)
    document.querySelector(".computer-move").innerText = (`${computerPick}`)
    outcomeElement.classList.add("result")
    movesElement.classList.add("result")
    document.querySelector(".wins").innerText = (`${scores.wins}`)
    document.querySelector(".losses").innerText = (`${scores.losses}`)
    document.querySelector(".ties").innerText = (`${scores.Ties}`)
}

function reset() {
    document.querySelector(".wins").innerText = (`${scores.wins}`)
    document.querySelector(".losses").innerText = (`${scores.losses}`)
    document.querySelector(".ties").innerText = (`${scores.Ties}`)
}

// Calling the Functions
for (let i = 0; i < 3; i++) {
    options[i].addEventListener("click", function () {
        yourPick = options[i].innerHTML;
        computer();
        play();
        scoreTracker();
        showResult();
    });
}


document.querySelector(".reset").addEventListener("click", function () {
    scores.Ties = 0;
    scores.losses = 0;
    scores.wins = 0;
    localStorage.removeItem("scores")
    reset();
});