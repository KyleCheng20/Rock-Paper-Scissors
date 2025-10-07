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
    computerChoice = computerChoice.toUpperCase();

    let humanScoreDisplay = document.querySelector(".human-score");
    let computerScoreDisplay = document.querySelector(".computer-score");
    let msg = document.querySelector(".message");

    //human choose rock scenarios
    if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
        humanScoreDisplay.textContent = ++humanScore;
        msg.textContent = "You win! The computer chose Scissors. Rock beats Scissors.";
    }
    if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        computerScoreDisplay.textContent = ++computerScore;
        msg.textContent = "You lose! The computer chose Paper. Paper beats Rock.";
    }
    if(humanChoice === "ROCK" && computerChoice === "ROCK"){
        msg.textContent = "You Tie! You both chose Rock.";
    }

    //human choose paper scenarios
    if(humanChoice === "PAPER" && computerChoice === "SCISSORS"){
        computerScoreDisplay.textContent = ++computerScore;
        msg.textContent = "You Lose! The computer chose scissors. Scissors beats Paper.";
    }
    if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        humanScoreDisplay.textContent = ++humanScore;
        msg.textContent = "You Win! The computer chose Rock. Paper beats Rock.";
    }
    if(humanChoice === "PAPER" && computerChoice === "PAPER"){
        msg.textContent = "You Tie! You both chose Paper.";
    }

    //human choose scissors scenarios
    if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
        humanScoreDisplay.textContent = ++humanScore;
        msg.textContent = "You win! The computer chose Paper. Scissors beats Paper.";
    }
    if(humanChoice === "SCISSORS" && computerChoice === "ROCK"){
        computerScoreDisplay.textContent = ++computerScore;
        msg.textContent = "You lose! The computer chose Rock. Rock beats Scissors.";
    }
    if(humanChoice === "SCISSORS" && computerChoice === "SCISSORS"){
        msg.textContent = "You Tie! You both chose Scissors.";
    }

    if(humanScore === 5 || computerScore === 5){
        let rockBtn = document.querySelector("#rock");
        let paperBtn = document.querySelector("#paper");
        let scissorsBtn = document.querySelector("#scissors");
        let resetBtn = document.querySelector("#reset");

        if(humanScore === 5){
            msg.textContent = "You win the game!";
        }
        else{
            msg.textContent = "You lose the game!";
        }

        rockBtn.hidden = true;
        paperBtn.hidden = true;
        scissorsBtn.hidden = true;
        resetBtn.hidden = false;

        resetBtn.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;

            humanScoreDisplay.textContent = humanScore;
            computerScoreDisplay.textContent = computerScore;
            msg.textContent = "";

            rockBtn.hidden = false;
            paperBtn.hidden = false;
            scissorsBtn.hidden = false;
            resetBtn.hidden = true;
        });
    }
}

let buttonContainer = document.querySelector(".button-container");

//Using event delegation to add event listener to parent element
buttonContainer.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id){
        case "rock":
            playRound("ROCK", getComputerChoice());
            break;
        case "paper":
            playRound("PAPER", getComputerChoice());
            break;
        case "scissors":
            playRound("SCISSORS", getComputerChoice());
            break;
    }
});