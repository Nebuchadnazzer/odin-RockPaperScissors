//Computer Selection
    //Generate a random number from 1 to 3
    //Numbers 1 to 3 are assigned to rock, paper or scissors
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    switch (randomNumber) {
        case 1:
            computerSelection = "rock"
            break;
        case 2:
            computerSelection = "paper"
            break;
        case 3:
            computerSelection = "scissors"
            break;
    }
    return computerSelection;
    }

//User Selection
    //Prompts user to type a selection
    //Users typed selection is coverted to lower strings for consistency
function getPlayerChoice() {
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    return playerSelection;
}