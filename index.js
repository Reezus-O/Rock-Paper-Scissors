// Variables
let options = document.querySelectorAll(".picks");
let yourPick;
let computerPick;
let outcome;

// Objects
let scores = JSON.parse(localStorage.getItem("scores")) || {
    wins : 0,
    loses: 0,
    Ties: 0
};

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
        scores.loses++;
    } else if (outcome === "You Win :)") {
        scores.wins++;
    }
    localStorage.setItem("scores", JSON.stringify(scores));
}


// Calling the Functions

for (let i = 0; i < 3; i++) {
    options[i].addEventListener("click", function () {
        yourPick = options[i].innerHTML;
        computer();
        play();
        scoreTracker();
        alert(`You picked ${yourPick} and Computer picked ${computerPick}. ${outcome} \nWins: ${scores.wins}, Losses:${scores.loses}, Ties:${scores.Ties}`)
    });
}


document.querySelector(".reset").addEventListener("click", function () {
    scores.Ties = 0;
    scores.loses = 0;
    scores.wins = 0;
    localStorage.removeItem("scores")
    alert(`Scores have been reset! \nWins: ${scores.wins}, Losses:${scores.loses}, Ties:${scores.Ties}`)
});