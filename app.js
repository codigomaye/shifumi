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