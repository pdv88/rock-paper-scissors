const options = ["rock", "paper", "scissors"]

function computerChoice() {
    var choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function playerChoice(string) {
    return string
}

var computerScore = 0
var playerScore = 0

var rockBtn = document.getElementById("rock")
    rockBtn.addEventListener("click", playRockRound())

var paperBtn = document.getElementById("paper")
    paperBtn.addEventListener("click", playPaperRound())

var scissorsBtn = document.getElementById("scissors")
    scissorsBtn.addEventListener("click", playScissorsRound())

function playRockRound(computerSelection) {
    if(computerSelection == "rock") { 
        console.log("It's a draw")
    } else if(computerSelection == "paper"){
        console.log("You lost :( paper beats rock" )
        computerScore++
    } else {
        console.log("You won! :) rock beats scissors")
        playerScore++
    }
    console.log("computer " + computerScore + " Player " + playerScore)
    console.log("---------------")
}

function playPaperRound(computerSelection) {
    if(computerSelection == "paper") { 
        console.log("It's a draw")
    } else if(computerSelection == "scissors"){
        console.log("You lost :( scissors beats paper" )
        computerScore++
    } else {
        console.log("You won! :) paper beats rock")
        playerScore++
    }
    console.log("computer " + computerScore + " Player " + playerScore)
    console.log("---------------")
}

function playScissorsRound(computerSelection) {
    if(computerSelection == "scissors") { 
        console.log("It's a draw")
    } else if(computerSelection == "rock"){
        console.log("You lost :( rock beats scissors" )
        computerScore++
    } else {
        console.log("You won! :) scissors beats paper")
        playerScore++
    }
    console.log("computer " + computerScore + " Player " + playerScore)
    console.log("---------------")
}






