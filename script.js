var computerScore = 0
var playerScore = 0
const options = ["rock", "paper", "scissors"]

const scoreboard = document.querySelector('#scoreboard')
const gameMessage = document.querySelector('#gameMessage')
const weaponMenu = document.querySelector('#weaponMenu')
const score = document.createElement('div')
const gameWinner = document.createElement('div')
const roundWinner = document.createElement('div')
const restartGame = document.createElement('button')

function computerChoice() {
    var choice = options[Math.floor(Math.random() * options.length)]
    return choice
}

function playRound (playerSelection){
    const computerSelection = computerChoice()
    
    if (playerSelection == computerSelection){
        roundWinner.textContent = "it's a tie"   
        gameMessage.appendChild(roundWinner)
        } else if (playerSelection == "rock" && computerSelection == "scissors" || 
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper"){
            playerScore++
            roundWinner.textContent = `You win!! ${playerSelection} beats ${computerSelection}`
            gameMessage.appendChild(roundWinner)
        } else {
            computerScore++
            roundWinner.textContent = `You lose :( ${computerSelection} beats ${playerSelection}`   
            gameMessage.appendChild(roundWinner)
        }
        score.textContent = `Player ${playerScore} Computer ${computerScore}`
        scoreboard.appendChild(score)
    if (computerScore == 5 || playerScore == 5){
        if (computerScore == 5){
            gameWinner.textContent = 'Game Over !!!! Computer won the game :('
            gameMessage.appendChild(gameWinner)
        } else if (playerScore == 5){
            gameWinner.textContent = 'Game Over !!!! You won the game!! :)'
            gameMessage.appendChild(gameWinner)
        }
        restartGame.textContent = 'Restart Game'
        restartGame.addEventListener('click', reset)
        weaponMenu.appendChild(restartGame)
        var weapons = document.getElementsByClassName("weapon");
            for(var i = 0; i < weapons.length; i++) {
            weapons[i].disabled = true;
            }   
        // weapon.disabled = true
    }
}

function reset(){
    playerScore = 0
    computerScore = 0
    gameMessage.removeChild(gameWinner)
    gameMessage.removeChild(roundWinner)
    scoreboard.removeChild(score)
    weaponMenu.removeChild(restartGame)
    var weapons = document.getElementsByClassName("weapon");
            for(var i = 0; i < weapons.length; i++) {
            weapons[i].disabled = false;
            }
    // weapon.disabled = false
}





