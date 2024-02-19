//Computer Selection
    //Generate a random number from 0 to 2
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
    }

//User Selection
    //Prompts user to type a selection
        //Assume user will only type rock, paper or scissors
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

//Translate number selection to string definition
function getChoiceName (selection) {
    switch (selection) {
        case 0:
            selection = "Rock"
            break;
        case 1:
            selection = "Paper"
            break;   
        case 2:      
            selection = "Scissors"
            break;     
    }
    return selection
}

//Get both values and evaluate final result
function playRound() {
    //Get players selection (0, 1 or 2)
    const player1 = getPlayerChoice()
    const player2 = getComputerChoice()
    //Translate players selection (Rock, Paper or Scissors)
    let playerSelection = getChoiceName(player1);
    let computerSelection = getChoiceName(player2);

    //Equation `(player2 - player1 + 3)` created from rock paper scissors truth table
    //Winner is decided on difference of equation, hence adding `%3` to equation
    const result = (player2 - player1 + 3) % 3

    //Show who won by switch statement
    let finalResult
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