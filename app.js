// USER_CHOICE
function playerPlay() {

    let userChoice;
    let keepAsking = true;


    while (keepAsking) {
        
        userChoice = prompt("Insert 'Rock', 'Paper' or 'Scissors'");

        userChoice = userChoice.toLowerCase();

        if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
            keepAsking = false;
            return userChoice;
        }

        else {
            alert("You have to insert either 'Rock', 'Paper' or 'Scissors'. Try again");
        }
    }
}

// COMPUTER_CHOICE
function computerPlay() {

    let choices = ["rock", "paper", "scissors"];

    let randomChoice;

    randomChoice = Math.random() * 3;

    randomChoice = Math.floor(randomChoice);

    return choices[randomChoice];
}


function playRound(playerSelection, computerSelection) {

    let user = playerSelection;

    let computer = computerSelection;

    let winner;

    if (user == computer) {

        console.log(`You -> ${user} | Computer -> ${computer}: It's a tie!`);

        winner = "tie";

    }

    else if (user == "paper" && computer == "rock" || user == "scissors" && computer == "paper" || user == "rock" && computer == "scissors") {

        console.log(`You -> ${user} | Computer -> ${computer}: You win`);

        winner = "user";
    }

    else {
        console.log(`You -> ${user} | Computer -> ${computer}: Computer win`);

        winner = "computer";
    }

    return winner;

}


const playerSelection = playerPlay();
const computerSelection = computerPlay();
// playRound(playerSelection, computerSelection)

// GAME
function game() {

    let userScore = 0;

    let computerScore = 0;

    let winner;

    for (let i = 0; i < 5; i++) {

        winner = playRound();

        switch (winner) {

            case "user":
                userScore++;
                break;

            case "computer":
                computerScore++;
                break;

            default:
                break;
        }

    }


    console.log(`Your Score: ${userScore}`);

    console.log(`Computer Score: ${computerScore}`);

    if (userScore > computerScore) {
        console.log("Congratulation user. You won!!");
    }


    else if (userScore < computerScore) {
        console.log("Nice try. Computer won!!");
    }

    else {
        console.log("It's a tie");
    }
}