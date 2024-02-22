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
function getChoiceName (choiceName) {
    switch (choiceName) {
        case 0:
            choiceName = "Rock"
            break;
        case 1:
            choiceName = "Paper"
            break;   
        case 2:      
        choiceName = "Scissors"
            break;     
    }
    return choiceName
}

//Get both values and evaluate final result
function playRound() {
    //Get players selection (0, 1 or 2)
    const player1 = getPlayerChoice();
    const player2 = getComputerChoice();
    //Translate players selection (Rock, Paper or Scissors)
    let playerSelection = getChoiceName(player1);
    let computerSelection = getChoiceName(player2);
    let player1Score = 0;
    let player2Score = 0;
    let finalResult;

    //Equation `(player2 - player1 + 3)` created from rock paper scissors truth table
    //Winner is decided on difference of equation, hence adding `%3` to equation
    const result = (player2 - player1 + 3) % 3

    //Show who won by switch statement
    switch (result) {
        case 0:
            finalResult = "Draw"
            break;
        case 1:
            finalResult = (`Player 2 Wins! ${computerSelection} beats ${playerSelection}!`)
            player2Score += 1
            break;
        case 2:
            finalResult = (`Player 1 Wins! ${playerSelection} beats ${computerSelection}!`)
            player1Score += 1
            break;
    }
    console.log(finalResult);
    return [player1Score, player2Score]
}

//Add counter
function playGame() {
    let playerScore = 0
    let computerScore = 0

    for (let i = 0; i < 5; i++) {
        round = playRound()
        playerScore += round[0]
        computerScore += round[1]
      }

    console.log(`
    Player: ${playerScore} 
    Computer: ${computerScore}`)
}

playGame();
//The game works
//But it keeps propmting the user for their selection 
//without being shown the results on the last round before being prompted to start another round
//Player should have the option to start the