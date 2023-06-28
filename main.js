var getComputerChoice = function (){
    const Array = ['Rock', 'Paper', 'Scissors'];
    let x = Math.floor(Math.random() * Array.length);
    console.log(Array[x]);
    return Array[x];
    }
    getComputerChoice();
    