let options = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;
let currentRound = 1;
let winningScore = 5;
let endMatch = false;

let gameScreen = document.getElementById("gameScreen");

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(getHumanChoice, getComputerChoice) {

    let humanChoice = getHumanChoice;
    let computerChoice = getComputerChoice;

    gameScreen.innerHTML += `<span>You Choose ${humanChoice}, Computer Choose ${computerChoice}</span><br />`;

    switch (humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    gameScreen.innerHTML += `<span>Its a TIE! You both Choose ${humanChoice}</span><br />`;
                    break;
                case "paper":
                    computerScore++;
                    gameScreen.innerHTML += `<span>Computer takes it! ${computerChoice} wraps ${humanChoice}</span><br />`;
                    break;
                case "scissors":
                    humanScore++;
                    gameScreen.innerHTML += `<span>You Win! ${humanChoice} breaks ${computerChoice}</span><br />`;
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "paper":
                    gameScreen.innerHTML += `<span>Its a TIE! You both Choose ${humanChoice}<span><br />`;
                    break;
                case "scissors":
                    computerScore++;
                    gameScreen.innerHTML += `<span>Computer takes it! ${computerChoice} cuts ${humanChoice}</span><br />`;
                    break;
                case "rock":
                    humanScore++;
                    gameScreen.innerHTML += `<span>You Win! ${humanChoice} wraps ${computerChoice}</span><br />`;
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "scissors":
                    gameScreen.innerHTML += `<span>Its a TIE! You both Choose ${humanChoice}</span><br />`;
                    break;
                case "rock":
                    computerScore++;
                    gameScreen.innerHTML += `<span>Computer takes it! ${computerChoice} breaks ${humanChoice}</span><br />`;
                    break;
                case "paper":
                    humanScore++;
                    gameScreen.innerHTML += `<span>You Win! ${humanChoice} cuts ${computerChoice}</span><br />`;
                    break;
            }
            break;
    }
}

function playGame(humanChoice) {
    if(endMatch) return;

    gameScreen.innerHTML += `<span>Round ${currentRound}</span><br />`;
    playRound(humanChoice, getComputerChoice());
    gameScreen.innerHTML +=`<span>Computer Score: ${computerScore}</span><br />`;
    gameScreen.innerHTML +=`<span>Your Score: ${humanScore}</span><br />`;
    
    if(computerScore === winningScore) {
        endMatch = true;
        gameScreen.innerHTML += "<span>You Lose! Try again by hitting the reload button</span><br />";
    } else if(humanScore === winningScore) {
        endMatch = true;
        gameScreen.innerHTML += "<span>You Win! Wanna Win again? Hit the reload button</span><br />";
    }

    currentRound++;
}