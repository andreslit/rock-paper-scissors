function getComputerChoice(){
    random_integer = Math.floor(Math.random()*3);
    let choice;
    switch (random_integer) {
        case 0:
            choice = "Rock";
            break
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
        default:
            choice = "Error";
            break;
        }
    return choice
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    
    if (playerSelection == computerSelection) {
        return "Draw"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats Scissors"
    }
    //TODO complete with the other possibilities
    return
}

console.log(playRound("Rock", getComputerChoice()))