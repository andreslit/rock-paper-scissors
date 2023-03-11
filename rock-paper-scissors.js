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
    
    if (!["rock", "paper", "scissors"].includes(playerSelection)) {
        console.log("Input has to be rock, paper or scissors")
        return
    }

    let choiceMap = new Map();
    choiceMap.set("rock", ["scissors", "paper"]);
    choiceMap.set("paper", ["rock", "scissors"]);
    choiceMap.set("scissors", ["paper", "rock"]);

    if (playerSelection == computerSelection) {
        return "Draw"
    }
    else if (computerSelection == choiceMap.get(playerSelection)[0]) {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You loose! ${computerSelection} beats ${playerSelection}`
    }
    return
}

function game() {

    playerScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        roundResult = playRound(prompt(), getComputerChoice())

        console.log(roundResult)

        switch (roundResult.slice(4, 7)) {
            case "win":
                playerScore++;
                break
            case "loo":
                computerScore++;
                break
        }

    }

    difference = playerScore - computerScore

    if (difference > 0) {
        return "You win!"
    }
    else if (difference < 0) {
        return "You loose"
    }
    else {
        return "Draw"
    }

}

console.log(game())