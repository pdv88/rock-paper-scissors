const options = ["rock", "paper", "scissors"]

function computerChoice() {
    var choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function playerChoice() {
    let validInput = false
    while (validInput == false){
        var input = prompt("Choose rock, paper or scissors")
        input = input.toLowerCase()
        if(options.includes(input)) {
            validInput = true
            return input
        }
    }    
}

var computerScore = 0
var playerScore = 0

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) { 
        console.log("It's a draw")
    } else if((computerSelection == "rock" && playerSelection == "scissors") || 
            (computerSelection == "paper" && playerSelection == "rock") || 
            (computerSelection == "scissors" && playerSelection == "paper")){
        console.log("You lost :( " + computerSelection + " beats " + playerSelection)
        computerScore++
    } else {
        console.log("You won! :) " + playerSelection + " beats " + computerSelection)
        playerScore++
    }
    console.log("computer " + computerScore + " Player " + playerScore)
    console.log("---------------")
}

function game(){ 
    for (let i = 0; i < 5; i++){
        let playerSelection = playerChoice()
        let computerSelection = computerChoice()
        playRound(playerSelection, computerSelection)
    }
    if (playerScore < computerScore){
        console.log("You Lost The Game")
    } else if (computerScore < playerScore) {
        console.log("You Won The Game!!!")
    } else {
        console.log("You Tied The Game :/")
    }
}


var btn = document.getElementById("gameStart")
    btn.addEventListener("click", game)