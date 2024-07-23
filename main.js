let options = ["rock", "paper", "scissors"];

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");

    let validOption;

    let i;

    for(i = 0; i < options.length; i++) {
        if (humanChoice.toLowerCase() === options[i]) {
            validOption = true;
            break;
        } else {
            continue;
        }
    }

    if(validOption) {
        return options[i];
    } else {
        alert("Never Played Rock Paper Scissors before or what??")
        return getHumanChoice();
    }
}

function playRound(getHumanChoice, getComputerChoice) {

    let humanChoice = getHumanChoice;
    let computerChoice = getComputerChoice;

    console.log(`You Choose ${humanChoice}, Computer Choose ${computerChoice}`);

    switch (humanChoice) {
        case "rock":
            switch(computerChoice) {
                case "rock":
                    console.log(`Its a TIE! You both Choose ${humanChoice}`);
                    break;
                case "paper":
                    computerScore++;
                    console.log(`Computer takes it! ${computerChoice} wraps ${humanChoice}`);
                    break;
                case "scissors":
                    humanScore++;
                    console.log(`You Win! ${humanChoice} breaks ${computerChoice}`);
                    break;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "paper":
                    console.log(`Its a TIE! You both Choose ${humanChoice}`);
                    break;
                case "scissors":
                    computerScore++;
                    console.log(`Computer takes it! ${computerChoice} cuts ${humanChoice}`);
                    break;
                case "rock":
                    humanScore++;
                    console.log(`You Win! ${humanChoice} wraps ${computerChoice}`);
                    break;
            }
            break;
        case "scissors":
            switch(computerChoice) {
                case "scissors":
                    console.log(`Its a TIE! You both Choose ${humanChoice}`);
                    break;
                case "rock":
                    computerScore++;
                    console.log(`Computer takes it! ${computerChoice} breaks ${humanChoice}`);
                    break;
                case "paper":
                    humanScore++;
                    console.log(`You Win! ${humanChoice} cuts ${computerChoice}`);
                    break;
            }
            break;
    }
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}`);
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Computer Score: ${computerScore}`);
        console.log(`Your Score: ${humanScore}`);
    }

    if(computerScore > humanScore) {
        return "You Lose! Try again by hitting the reload button";
    } else if(computerScore === humanScore) {
        return "Well its a Tie! Break the Tie by hitting the reload button";
    } else {
        return "You Win! Wanna Win again? Hit the reload button";
    }
}

console.log(playGame());