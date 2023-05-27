let options = document.querySelectorAll(".picks");
let yourPick;
let computerPick;
let outcome;

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
    if (yourPick === "Rock" && computerPick === "Rock") {
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
    } else if (yourPick === "Paper" && computerPick === "Paper") {
        outcome = "It's a Tie";
    } else if (yourPick === "Scissors" && computerPick === "Scissors") {
        outcome = "It's a Tie";
    }
}

for (let i = 0; i < 3; i++) {
    options[i].addEventListener("click", function () {
        yourPick = options[i].innerHTML;
        computer();
        play();
        alert(`You picked ${yourPick} and Computer picked ${computerPick}. ${outcome}`)
    });
}