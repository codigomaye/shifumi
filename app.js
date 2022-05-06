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


// GAME
function game() {

    // Create variable "userScore" as integer with value 0 
    let userScore = 0;

    // Create variable "computerScore" as integer with value 0 
    let computerScore = 0;

    // Create variable "userChoice" as string 
    let userChoice;

    // Create variable "computerChoice" as string 
    let computerChoice;

    // Create variable "winner" as string 
    let winner;

    // Enter in a 5 time loop 
    for(let i = 0; i < 5; i++){

        // Set "userChoice" value as USER_CHOICE 
        userChoice = playerPlay();

        // Set "computerChoice" value as COMPUTER_CHOICE 
        computerChoice = computerPlay();

        // set "winner" value as PLAY_ROUND with parameter: userChoice, computerChoice 
        winner = playRound(userChoice, computerChoice);

        // In the case "winner" 
        switch(winner){
            
            // Is 'user' then increment "userScore" value by 1 
            case 'user':
                userScore++;
                break;
            
            // Is 'computer' then increment "computerScore" value by 1 
            case 'computer':
                computerScore++;
                break;

            // Else do nothing 
            default:
                break;
        }
        // End of loop 
    }
    
    // Print out "Your Score: 'userScore'" 
     console.log(`Your score: ${userScore}`);
    
    // Print out "Computer Score: 'computerScore'" 
    console.log(`Computer score: ${computerScore}`);
    
    // If "userScore" is greater than "computerScore" then Print out "Congratulation user. You Won!!" 
    if(userScore > computerScore){
        console.log("Congratulation: You won!!");
    }
     
    // Else if "userScore" is smaller than "computerScore" then Print out "Nice try. Computer Won!!" 
    else if (userScore < computerScore){
        console.log("Nice try. Computer won!!");
    }
    
    // Else Print out "It's a Tie" 
     else{
         console.log("It's a tie !!");
     }
    
}

game();