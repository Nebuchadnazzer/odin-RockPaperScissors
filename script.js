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
function getPlayerChoice(playerChoice) {
    switch (playerChoice) {
        case 'rock':
            return 0;
        case 'paper':
            return 1;
        case 'scissors':
            return 2;
    }
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

function playRound(player1) {
    //Get computers selection (0, 1 or 2)
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
            finalResult = "It's a Draw!"
            break;
        case 1:
            finalResult = (`${computerSelection} beats ${playerSelection}!`)
            player2Score += 1
            break;
        case 2:
            finalResult = (`${playerSelection} beats ${computerSelection}!`)
            player1Score += 1
            break;
    }
    const resultDiv = document.querySelector('#results');
    resultDiv.innerText = finalResult;
    return [player1Score, player2Score];
}

let totalPlayer1Score = 0;
let totalPlayer2Score = 0;
const winningScore = 5;

function updateScores(player1Score = 0, player2Score = 0) {
    totalPlayer1Score += player1Score;
    totalPlayer2Score += player2Score;
    const totalPlayerScore = document.querySelector('#player-score');
    const totalComputerScore = document.querySelector('#computer-score');
    totalPlayerScore.innerText = `Player: ${totalPlayer1Score}`;
    totalComputerScore.innerText = `Computer: ${totalPlayer2Score}`;
}

function checkWinner() {
    const finalResultsDiv = document.querySelector('#final-results');
        //finalResultsDiv kept pushing the other divs down after showing results
        //placed a placeholder in index.html with ""
        //the placeholder was invisble but took space 
        //to avoid the divs being pushed down
        if (totalPlayer1Score >= winningScore) {
            const resetConfirmation = confirm("Player Wins! Do you want to play another game?");
            if (resetConfirmation) {
                resetGame();
            }
            else {
                finalResultsDiv.innerText = "Player Wins!";
            }
        } else if (totalPlayer2Score >= winningScore) {""
            const resetConfirmation = confirm("Computer Wins! Do you want to play another game?");
            if (resetConfirmation) {
                resetGame();
            }
            else {
                finalResultsDiv.innerText = "Computer Wins!";
            }
        }
    }

// Initial update of total scores
updateScores();

function resetGame() {
    totalPlayer1Score = 0;
    totalPlayer2Score = 0;
    const totalPlayerScore = document.querySelector('#player-score');
    const totalComputerScore = document.querySelector('#computer-score');
    totalPlayerScore.innerText = `Player: ${totalPlayer1Score}`;
    totalComputerScore.innerText = `Computer: ${totalPlayer2Score}`;
    const finalResultsDiv = document.querySelector('#final-results');
    finalResultsDiv.style.visibility = "hidden";
    finalResultsDiv.innerText = "";
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let playerSelection;
        switch (button.id) {
            case 'rock':
                playerSelection = getPlayerChoice('rock');
                break;
            case 'paper':
                playerSelection = getPlayerChoice('paper');
                break;
            case 'scissors':
                playerSelection = getPlayerChoice('scissors');
                break;
        }
        const [player1Score, player2Score] = playRound(playerSelection);
        updateScores(player1Score, player2Score);
        checkWinner();
    });
});