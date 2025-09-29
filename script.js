let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);

    if(randomChoice === 0){
        return console.log("Rock");
    }
    else if(randomChoice === 1){
        return console.log("Paper");
    }
    else{
        return console.log("Scissors");
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice (Rock, Paper, or Scissors):");
    return choice;
}


