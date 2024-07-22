let options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return Math.floor(Math.random() * options.length);
}

let getHumanChoice = () => {
    let humanChoice = prompt("Enter your choice: ");

    let validOption;

    for(let i = 0; i < options.length; i++) {
        if (humanChoice.toLowerCase() === options[i]) {
            validOption = true;
            break;
        } else {
            continue;
        }
    }

    if(validOption) {
        return validOption;
    } else {
        alert("Never Played Rock Paper Scissors before or what??")
        return getHumanChoice();
    }
}

console.log(getHumanChoice());