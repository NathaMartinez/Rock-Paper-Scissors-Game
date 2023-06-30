
function getComputerChoice (){
    const Array = ['Rock', 'Paper', 'Scissors'];
    let x = Math.floor(Math.random() * Array.length);
    console.log("Computer picked:", Array[x]);
    return Array[x].toString().toLowerCase();
    }

function getPlayerChoice() {
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
        return userInput.toString().toLowerCase();
    }

    let playerWin = false;
    let computerWin = false;
function playRound() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    if (playerSelection == computerSelection){
        console.log("Draw");
        playerWin = false;
        computerWin = false;
    } else if (playerSelection != computerSelection){
        if ((playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock')){
            console.log("Computer Wins.\n", computerSelection[0].toUpperCase() + computerSelection.substring(1),
            "beats", playerSelection);
            playerWin = false;
            computerWin = true;
        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                   (playerSelection == 'paper' && computerSelection == 'rock')  ||
                   (playerSelection == 'scissors' && computerSelection == 'paper')){
            console.log("Player Wins.\n", playerSelection[0].toUpperCase() + playerSelection.substring(1), 
            "beats", computerSelection,);
            computerWin = false;
            playerWin = true;
        } else {
            playerWin = false;
            computerWin = false;
            (console.log("invalid Input. Enter Rock, Paper, or Scissors."));
        }
    }
}   
    function game(){
        var playerPoint = 0;
        var computerPoint = 0;
        for(let i = 1; i < 6; i++) {
        playRound();
        if (playerWin == true){
            playerPoint += 1;
        } if (computerWin == true){
            computerPoint += 1;
        }
        console.log("Round", i) 
        console.log("Player points:", playerPoint, "\nComputer Points:", computerPoint,"\n-------------------------")
        }
        for(i = 5; i < 6; i++){
            if (playerPoint > computerPoint){
                console.log("Player Wins.");
            } else if (playerPoint < computerPoint){
                console.log("Computer Wins.");
            } else if (playerPoint == computerPoint){
                console.log("Its a Tie.");
        }
    }
}
    console.log(game());