
function getComputerChoice (){
    const Array = ['Rock', 'Paper', 'Scissors'];
    let x = Math.floor(Math.random() * Array.length);
    console.log("Computer Picked:", Array[x]);
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
    var playerPoint = 0;
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
           
            console.log("player points:", playerPoint);
        } else if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
                   (playerSelection == 'paper' && computerSelection == 'rock')  ||
                   (playerSelection == 'scissors' && computerSelection == 'paper')){
            console.log("Player Wins.\n", playerSelection[0].toUpperCase() + playerSelection.substring(1), 
            "beats", computerSelection,);
            computerWin = false;
            playerWin = true;
            playerPoint += 1;
        } else {
            (console.log("invalid Input. Enter Rock, Paper, or Scissors."));
        }
    }
}
    
    console.log(playRound());
    
    function game(){
        var playerPoint = 0;
        for(let i = 0; i< 5; i++) {
        playRound();
        if (playerWin == true){
            playerPoint += 1;
            console.log("player points:", playerPoint)
        }  
        }
    }
    console.log(game());