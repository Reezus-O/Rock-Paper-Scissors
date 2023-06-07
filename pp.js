// Variables
let options = document.querySelectorAll("img");
let yourPick;
let computerPick;
let computerPick2;
let outcome;
let outcomeElement = document.querySelector(".outcome")
let movesElement = document.querySelector(".moves")
let yourMove = document.querySelector(".your-move")
let computerMove = document.querySelector(".computer-move")
let autoPlayBtn = document.querySelector(".auto-play")

let intervals = setInterval(function () {
    computer();
    computer2();
    autoPlay();
    scoreTracker();
    autoPlayResult();
    autoPlayBtn.innerHTML = "Stop"
    autoPlayBtn.classList.add("stop-play")
    autoPlayBtn.classList.remove("auto-play")
}, 3000)

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

function computer2() {
    let randomNumber2 = Math.ceil(Math.random() * 3);

    if (randomNumber2 === 1) {
        computerPick2 = "Rock";
    } else if (randomNumber2 === 2) {
        computerPick2 = "Paper";
    } else if (randomNumber2 = 3) {
        computerPick2 = "Scissors";
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

function autoPlay() {
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
        yourMove.setAttribute("src", "./Images/Rock.png")
    } else if (yourPick === "Paper") {
        yourMove.setAttribute("src", "./Images/Paper.png")
    } else if (yourPick === "Scissors") {
        yourMove.setAttribute("src", "./Images/Scissors.png")
    } else { }

    if (computerPick === "Rock") {
        computerMove.setAttribute("src", "./Images/Rock.png")
    } else if (computerPick === "Paper") {
        computerMove.setAttribute("src", "./Images/Paper.png")
    } else if (computerPick === "Scissors") {
        computerMove.setAttribute("src", "./Images/Scissors.png")
    } else { }
}

function autoPlayMoves() {
    if (computerPick2 === "Rock") {
        yourMove.setAttribute("src", "./Images/Rock.png")
    } else if (computerPick2 === "Paper") {
        yourMove.setAttribute("src", "./Images/Paper.png")
    } else if (computerPick2 === "Scissors") {
        yourMove.setAttribute("src", "./Images/Scissors.png")
    } else { }

    if (computerPick === "Rock") {
        computerMove.setAttribute("src", "./Images/Rock.png")
    } else if (computerPick === "Paper") {
        computerMove.setAttribute("src", "./Images/Paper.png")
    } else if (computerPick === "Scissors") {
        computerMove.setAttribute("src", "./Images/Scissors.png")
    } else { }
}

function showResult() {
    outcomeElement.innerText = (`${outcome}`)
    moves();
    outcomeElement.classList.add("result")
    movesElement.classList.add("result")
    document.querySelector(".wins").innerText = (`${scores.wins}`)
    document.querySelector(".losses").innerText = (`${scores.losses}`)
    document.querySelector(".ties").innerText = (`${scores.Ties}`)
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
    document.querySelector(".wins").innerText = (`${scores.wins}`)
    document.querySelector(".losses").innerText = (`${scores.losses}`)
    document.querySelector(".ties").innerText = (`${scores.Ties}`)
}

// Calling the Functions
for (let i = 0; i < 3; i++) {
    options[i].addEventListener("click", function () {
        yourPick = options[i].alt;
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

autoPlayBtn.addEventListener("click", intervals())

document.querySelector(".stop-play").addEventListener("click", function () {
    clearInterval(intervals);
})