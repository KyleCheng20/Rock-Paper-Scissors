let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random() * 3);       //Random integer from 0-2

    if(randomChoice === 0){
        return "Rock";
    }
    else if(randomChoice === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice (Rock, Paper, or Scissors):");
    return choice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase();
    computerChoice = computerChoice.toUpperCase();

    //human choose rock scenarios
    if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        humanScore++;
        return console.log("You win! The computer chose Scissors. Rock beats Scissors.");
    }
    if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        computerScore++;
        return console.log("You lose! The computer chose Paper. Paper beats Rock.");
    }
    if(humanChoice === "ROCK" && computerChoice === "ROCK"){
        return console.log("You Tie! You both chose Rock.");
    }

    //human choose paper scenarios
    if(humanChoice === "PAPER" && computerChoice === "SCISSORS"){
        computerScore++;
        return console.log("You Lose! The computer chose scissors. Scissors beats Paper.");
    }
    if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        humanScore++;
        return console.log("You Win! The computer chose Rock. Paper beats Rock.");
    }
    if(humanChoice === "PAPER" && computerChoice === "PAPER"){
        return console.log("You Tie! You both chose Paper.");
    }

    //human choose scissors scenarios
    if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        humanScore++;
        return console.log("You win! The computer chose Paper. Scissors beats Paper.");
    }
    if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
        computerScore++;
        return console.log("You lose! The computer chose Rock. Rock beats Scissors.");
    }
    if(humanChoice === "SCISSORS" && computerChoice === "SCISSORS"){
        return console.log("You Tie! You both chose Scissors.");
    }
}

function playGame(){

    //Play for 5 rounds
    for(let i = 1; i <= 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Round: ${i}`);
        console.log(`Scores: Human - ${humanScore} | Computer - ${computerScore}`)
    }
    console.log(`Final Score: Human - ${humanScore} | Computer - ${computerScore}`);
    if(humanScore === computerScore){
        alert("Tie game!");
    }
    else if(humanScore > computerScore){
        alert("You win the game!");
    }
    else{
        alert("You lost the game!")
    }
}

playGame();