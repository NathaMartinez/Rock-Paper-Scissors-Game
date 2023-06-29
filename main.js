
var getComputerChoice = function (){
    const Array = ['Rock', 'Paper', 'Scissors'];
    let x = Math.floor(Math.random() * Array.length);
    console.log("Computer Picked:", Array[x]);
    return Array[x].toString().toLowerCase();
    }
       let userInput = prompt("Enter Rock, Paper, or Scissors");
       if (userInput.toString().toLowerCase() == 'rock') {
        console.log("You picked: Rock")
       }
       else if (userInput.toString().toLowerCase() == 'paper') {
        console.log("You picked: Paper")
       }
       else if (userInput.toString().toLowerCase() == 'scissors') {
        console.log("You picked: Scissors")
       }
       else {
        console.log("Error")
       }

function playRound(playerSelection, computerSelection) {
    let playerPoint = 0;
    let computerPoint = 0;
    if (playerSelection == computerSelection){
        console.log("Draw");
    } else if (playerSelection != computerSelection){
        if ((playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock')){
            console.log("Computer Wins.\n", computerSelection[0].toUpperCase() + computerSelection.substring(1),
            "beats", playerSelection);
            playerPoint++;
            console.log(playerPoint)
        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                   (playerSelection == 'paper' && computerSelection == 'rock')  ||
                   (playerSelection == 'scissors' && computerSelection == 'paper')){
            console.log("Player Wins.\n", playerSelection[0].toUpperCase() + playerSelection.substring(1), 
            "beats", computerSelection,);
            computerPoint++;
            console.log(computerPoint)
        } else{
            (console.log("invalid Input. Enter Rock, Paper, or Scissors."));
        }
    }
}
    const playerSelection = userInput.toString().toLowerCase();
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

   