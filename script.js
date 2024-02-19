//Computer Selection
    //Generate a random number from 0 to 2
function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
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
function playRound() {
    let player1 = getPlayerChoice()
    let player2 = getComputerChoice()
    console.log("User: " + player1)
    console.log("Computer:" + player2)

    result = (player2 - player1 + 3) % 3
    
    let finalResult
    switch (result) {
        case 0:
            finalResult = "Draw"
        case 1:
            finalResult = "Player 1 Wins"
        case 2:
            finalResult = "Player 2 Wins"
    }
    console.log(finalResult);
    return finalResult;
}

playRound();