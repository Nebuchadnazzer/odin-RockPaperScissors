//Computer Selection
    //Generate a random number from 0 to 2
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
    }

//User Selection
    //Assume user will only type rock, paper or scissors
    //Prompts user to type a selection
    //User selection is converted to 0, 1 or 2
function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    switch (playerChoice) {
        case 'rock':
            playerChoice = 0
            break;
        case 'paper':
            playerChoice = 1
            break;
        case 'scissors':
            playerChoice = 2
            break;
    }
    return playerChoice;
}

//Get both values and evaluate final result
//Function shows who wins but doesn't show what player selected vs what computer selected
function playRound() {
    const player1 = getPlayerChoice()
    const player2 = getComputerChoice()

    //Equation `(player2 - player1 + 3)` created from rock paper scissors truth table
    //Winner is decided on difference of equation, hence adding `%3` to equation
    const result = (player2 - player1 + 3) % 3
    let finalResult
    
    //Show Player Selection
    let playerSelection
    switch (player1) {
        case 0:
            playerSelection = "Rock"
            break;
        case 1:
            playerSelection = "Paper"
            break;   
        case 2:      
            playerSelection = "Scissors"
            break;       
    }

    //Show Computer Selection
    let computerSelection
    switch (player2) {
        case 0:
            computerSelection = "Rock"
            break;
        case 1:
            computerSelection = "Paper"
            break;   
        case 2:      
            computerSelection = "Scissors"
            break;       
    }

    //Show who won by switch statement
    switch (result) {
        case 0:
            finalResult = "Draw"
            break;
        case 1:
            finalResult = (`Player 2 Wins! ${computerSelection} beats ${playerSelection}!`)
            break;
        case 2:
            finalResult = (`Player 1 Wins! ${playerSelection} beats ${computerSelection}!`)
            break;
    }
    console.log(finalResult);}

playRound()