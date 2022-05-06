function userPlay() {

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

function computerPlay() {

    let choices = ["rock", "paper", "scissors"];

    let randomChoice;

    randomChoice = Math.random() * 3;

    randomChoice = Math.floor(randomChoice);

    return choices[randomChoice];
}

function emojify(choiceToEmojify){

    let choice = choiceToEmojify;

    switch (choice){

        case "rock" :
            return "🪨";
            break;

        case "paper":
            return "📜";
            break;

        case "scissors":
            return "✂️";
            break;

        default:
            return "error";
            break; 
    }
}


function playRound(playerSelection, computerSelection) {

    let user = playerSelection;

    let computer = computerSelection;

    let winner;

    if (user == computer) {

        console.log(`🙍 -> ${emojify(user)} | 🖥️ -> ${emojify(computer)}: It's a tie!`);

        winner = "tie";

    }

    else if (user == "paper" && computer == "rock" || user == "scissors" && computer == "paper" || user == "rock" && computer == "scissors") {

        console.log(`🙍 -> ${emojify(user)} | 🖥️ -> ${emojify(computer)}: You win`);

        winner = "user";
    }

    else {
        console.log(`🙍 -> ${emojify(user)} | 🖥️ -> ${emojify(computer)}: Computer win`);

        winner = "computer";
    }

    return winner;

}

function game() {

    let userScore = 0;

    let computerScore = 0;

    let userChoice;

    let computerChoice;

    let winner;

    for (let i = 0; i < 5; i++) {

        userChoice = userPlay();

        computerChoice = computerPlay();

        winner = playRound(userChoice, computerChoice);

        switch (winner) {

            case 'user':
                userScore++;
                break;

            case 'computer':
                computerScore++;
                break;

            default:
                break;
        }
    }

    console.log(`🙍: ${userScore}`);

    console.log(`🖥️: ${computerScore}`);

    if (userScore > computerScore) {
        console.log("Congratulation: You won!!");
    }

    else if (userScore < computerScore) {
        console.log("Nice try. Computer won!!");
    }

    else {
        console.log("It's a tie !!");
    }

}

game();