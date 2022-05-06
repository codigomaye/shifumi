// USER_CHOICE
function playerPlay(){

    // Create variable "userChoice" as string; 
    let userChoice;

    // Create variable "keepAsking" as string with value true; 
    let keepAsking = true;

    // enter in loop while keepAsking is true; 
    while(keepAsking){
        
        // ask user a value between "Rock", "Paper", "Scissors"; keep the value in "userChoice"; 
        userChoice = prompt("Insert 'Rock', 'Paper' or 'Scissors'");

        // set "userChoice" value to lower case; 
        userChoice = userChoice.toLowerCase();

        // if userChoice is "Rock", or "Paper", or "Scissors"; set "keepAsking" value to false; return "userChoice" 
        if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors"){
            keepAsking = false;
            return userChoice;
        }

        // else say to user "You have to insert either 'Rock', 'Paper' or 'Scissors'. Try again"
        else{
            alert("You have to insert either 'Rock', 'Paper' or 'Scissors'. Try again");
        }
    }
}

// COMPUTER_CHOICE
function computerPlay(){

    // Create array "choices" of string with values "rock", "paper" and "scissors" 
    let choices = ["rock", "paper", "scissors"];

    // Create variable "randomChoice" as integer 
    let randomChoice;

    // Set "randomChoice" value to a Random number between 0 and 3 not included 
    randomChoice = Math.random() * 3;

    // Round "randomChoice" value to the floor and keep the value to "randomChoice" 
    randomChoice = Math.floor(randomChoice);

    // Return "choices" element with "randomChoice" index 
    return choices[randomChoice];
}

// PLAY_ROUND

// SHIFUMI ORDER: Paper > Rock; Scissors > Paper; Rock > Scissors;  

// Get parameter from "USER_CHOICE" as "playerSelection" 

// Get parameter "COMPUTER_CHOICE" as "computerSelection" 
function playRound(playerSelection, computerSelection){

    // Create variable "user" as string with value "playerSelection" 
    let user = playerSelection;

    // Create variable "computer" as string with value "computerSelection" 
    let computer = computerSelection;

    // Create variable "winner" as string 
    let winner;
    
    // If "user" and "computer" are the same 
    if(user == computer){

        //     then say "You -> "user" | Computer -> "computer": It's a tie!" 
        console.log(`You -> ${user} | Computer -> ${computer}: It's a tie!`);

        //     then set "winner" value to "tie" 
        winner = "tie";    
        
    }
    // Else if "user" is "paper" and "computer" is "rock" 
    //     or "user" is "scissors" and "computer" is "paper" 
    
    //     or "user" is "rock" an "computer" is "scissors"  
    else if (user == "paper" && computer == "rock" || user == "scissors" && computer == "paper" || user == "rock" && computer == "scissors"){
        
        //     then say "You -> "user" | Computer -> "computer": You win" 
        console.log(`You -> ${user} | Computer -> ${computer}: You win`);

        //     then set "winner" value to "user" 
        winner = "user";
    }
    
    // Else 
    else{
        //     then say "You -> "user" | Computer -> "computer": Computer win" 
        console.log(`You -> ${user} | Computer -> ${computer}: Computer win`);

        //     then set "winner" value to "computer"  
        winner = "computer"; 
    }
      
    // return "winner" 
    return winner;
    
}


const playerSelection = playerPlay();
const computerSelection = computerPlay();
// playRound(playerSelection, computerSelection)

// GAME
function game(){
    
    // Create variable "userScore" as integer with value 0 
    let userScore = 0;

    // Create variable "computerScore" as integer with value 0 
    let computerScore = 0;

    // Create variable "winner" as string 
    let winner;

    // Enter in a 5 time loop 
    for (let i = 0; i < 5; i++){

        // set "winner" value as PLAY_ROUND 
        winner = playRound();

        // In the case "winner" 
        switch(winner){
            
            // Is 'user' then increment "userScore" value by 1 
            case "user":
                userScore++;
                break;

                // Is 'computer' then increment "computerScore" value by 1 
            case "computer":
                computerScore++;
                break;

            // Else do nothing 
            default:
                break;
            }
            
            // End of loop 
        }
        
         
        // Print out "Your Score: 'userScore'" 
        console.log(`Your Score: ${userScore}`);
        
        // Print out "Computer Score: 'computerScore'" 
        console.log(`Computer Score: ${computerScore}`);
        
        // If "userScore" is greater than "computerScore" then Print out "Congratulation user. You Won!!" 
        if(userScore > computerScore){
            console.log("Congratulation user. You won!!");
        }
         
        // Else if "userScore" is smaller than "computerScore" then Print out "Nice try. Computer Won!!" 
        else if (userScore < computerScore){
            console.log("Nice try. Computer won!!");
        }

        // Else Print out "It's a Tie" 
        else{
            console.log("It's a tie");
        }
    }