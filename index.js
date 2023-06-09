// Variables
let options = document.querySelectorAll("img");
let yourPick;
let computerPick;
let computerPick2;
let outcome;
let outcomeElement = document.querySelector(".outcome");
let movesElement = document.querySelector(".moves");
let yourMove = document.querySelector(".your-move");
let computerMove = document.querySelector(".computer-move");
let autoPlayBtn = document.querySelector(".auto-play");
let intervals;

// Objects
let scores = JSON.parse(localStorage.getItem("scores")) || {
    wins: 0,
    losses: 0,
    Ties: 0,
};

document.querySelector(".wins").innerText = `${scores.wins}`;
document.querySelector(".losses").innerText = `${scores.losses}`;
document.querySelector(".ties").innerText = `${scores.Ties}`;

// Functions
function computer() {
    let randomNumber = Math.ceil(Math.random() * 3);

    if (randomNumber === 1) {
        computerPick = "Rock";
    } else if (randomNumber === 2) {
        computerPick = "Paper";
    } else if (randomNumber === 3) {
        computerPick = "Scissors";
    }
}

function computer2() {
    let randomNumber2 = Math.ceil(Math.random() * 3);

    if (randomNumber2 === 1) {
        computerPick2 = "Rock";
    } else if (randomNumber2 === 2) {
        computerPick2 = "Paper";
    } else if (randomNumber2 === 3) {
        computerPick2 = "Scissors";
    }
}

function play() {
    if (yourPick === computerPick) {
        outcome = "It's a Tie";
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

function aPlay() {
    if (computerPick2 === computerPick) {
        outcome = "It's a Tie"
    } else if (computerPick2 === "Rock" && computerPick === "Paper") {
        outcome = "You Lose :(";
    } else if (computerPick2 === "Rock" && computerPick === "Scissors") {
        outcome = "You Win :)";
    } else if (computerPick2 === "Paper" && computerPick === "Rock") {
        outcome = "You Win :)";
    } else if (computerPick2 === "Paper" && computerPick === "Scissors") {
        outcome = "You Lose :(";
    } else if (computerPick2 === "Scissors" && computerPick === "Rock") {
        outcome = "You Lose :(";
    } else if (computerPick2 === "Scissors" && computerPick === "Paper") {
        outcome = "You Win :)";
    }
}

function autoPlay() {
    computer();
    computer2();
    aPlay();
    scoreTracker();
    autoPlayResult();
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

function moves() {
    if (yourPick === "Rock") {
        yourMove.setAttribute("src", "./Images/Rock.png");
    } else if (yourPick === "Paper") {
        yourMove.setAttribute("src", "./Images/Paper.png");
    } else if (yourPick === "Scissors") {
        yourMove.setAttribute("src", "./Images/Scissors.png");
    } else {
        // handle the case when no move is selected
    }

    if (computerPick === "Rock") {
        computerMove.setAttribute("src", "./Images/Rock.png");
    } else if (computerPick === "Paper") {
        computerMove.setAttribute("src", "./Images/Paper.png");
    } else if (computerPick === "Scissors") {
        computerMove.setAttribute("src", "./Images/Scissors.png");
    } else {
        // handle the case when no move is selected
    }
}

function autoPlayMoves() {
    if (computerPick2 === "Rock") {
        yourMove.setAttribute("src", "./Images/Rock.png");
    } else if (computerPick2 === "Paper") {
        yourMove.setAttribute("src", "./Images/Paper.png");
    } else if (computerPick2 === "Scissors") {
        yourMove.setAttribute("src", "./Images/Scissors.png");
    } else {
        // handle the case when no move is selected
    }

    if (computerPick === "Rock") {
        computerMove.setAttribute("src", "./Images/Rock.png");
    } else if (computerPick === "Paper") {
        computerMove.setAttribute("src", "./Images/Paper.png");
    } else if (computerPick === "Scissors") {
        computerMove.setAttribute("src", "./Images/Scissors.png");
    } else {
        // handle the case when no move is selected
    }
}

function showResult() {
    outcomeElement.innerText = outcome;
    moves();
    outcomeElement.classList.add("result");
    movesElement.classList.add("result");
    document.querySelector(".wins").innerText = `${scores.wins}`;
    document.querySelector(".losses").innerText = `${scores.losses}`;
    document.querySelector(".ties").innerText = `${scores.Ties}`;
}

function autoPlayResult() {
    outcomeElement.innerText = (`${outcome}`)
    autoPlayMoves();
    outcomeElement.classList.add("result")
    movesElement.classList.add("result")
    document.querySelector(".wins").innerText = (`${scores.wins}`)
    document.querySelector(".losses").innerText = (`${scores.losses}`)
    document.querySelector(".ties").innerText = (`${scores.Ties}`)
}

function reset() {
    localStorage.removeItem("scores");
    document.querySelector(".wins").innerText = `${scores.wins}`;
    document.querySelector(".losses").innerText = `${scores.losses}`;
    document.querySelector(".ties").innerText = `${scores.Ties}`;
}

// Event Listeners
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
        yourPick = options[i].alt;
        computer();
        play();
        scoreTracker();
        showResult();
    });
}

autoPlayBtn.addEventListener("click", function () {
    if (autoPlayBtn.classList.contains("auto-play")) {
        intervals = setInterval(autoPlay, 1500);
        autoPlayBtn.innerHTML = "Stop";
        autoPlayBtn.classList.add("stop-play");
        autoPlayBtn.classList.remove("auto-play");
    } else if (autoPlayBtn.classList.contains("stop-play")) {
        clearInterval(intervals);
        autoPlayBtn.innerHTML = "Auto Play";
        autoPlayBtn.classList.add("auto-play");
        autoPlayBtn.classList.remove("stop-play");
    }
});

document.querySelector(".reset").addEventListener("click", function () {
    scores.Ties = 0;
    scores.losses = 0;
    scores.wins = 0;
    localStorage.removeItem("scores");
    reset();
});
