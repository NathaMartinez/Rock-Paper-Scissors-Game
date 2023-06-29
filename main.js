
var getComputerChoice = function (){
    const Array = ['Rock', 'Paper', 'Scissors'];
    let x = Math.floor(Math.random() * Array.length);
    console.log("Computer Picked: ", Array[x]);
    return Array[x].toString().toLowerCase();
    }
    getComputerChoice();
    

       let userInput = prompt("Enter Rock, Paper, or Scissors");
       if (userInput.toString().toLowerCase() == 'rock') {
        console.log("Testing: You picked Rock")
       }
       else if (userInput.toString().toLowerCase() == 'paper') {
        console.log("Testing: You picked Paper")
       }
       else if (userInput.toString().toLowerCase() == 'scissors') {
        console.log("Testing: You picked Scissors")
       }
       else {
        console.log("Error")
       }

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        console.log("Draw");
    } else if (playerSelection != computerSelection){
        if ((playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock')){
            console.log("Computer Wins.");
        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                   (playerSelection == 'paper' && computerSelection == 'rock')  ||
                   (playerSelection == 'scissors' && computerSelection == 'paper')){
            console.log("Player Wins.");
        }
    }
}
    const playerSelection = userInput.toString().toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
