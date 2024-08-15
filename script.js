const choices = document.querySelectorAll('.choice')
const whowon = document.getElementById('whowon')
const PlayerScore = document.getElementById('PlayerScore')
const computerScore = document.getElementById('computerScore')
const computerChoosedDisplay = document.getElementById('computerChoosedDisplay')

let userScore = 0
let compScore = 0

function chooseArray(){
    compArray = ['rock', 'scissors', 'paper']
    let id = Math.floor(Math.random() * 3)
    return compArray[id];
}

function drawGame(){
    whowon.innerText = "Game Draw, Play again!"
    console.log(whowon.innerText);
}

function won(d){
    if(d){
        whowon.innerText = "Player Won"
        userScore++
        PlayerScore.innerText = userScore
        console.log(whowon.innerText, PlayerScore.innerText);
        
    } else {
        whowon.innerText = "Computer Won"
        compScore++
        computerScore.innerText = compScore
        console.log(whowon.innerText, computerScore.innerText);
    }
}

function playGame(player, computer){
    console.log(player, computer);

    if (player === computer) {
        drawGame()
    } else {
        if (player === 'rock') {
            computer === 'paper'? won(false) : won(true)
        } else if (player === 'paper'){
            computer === 'scissors'? won(false) : won(true)
        } else {
            computer === 'rock'? won(false) : won(true)
        }
    }
}

choices.forEach((userChoice) => {
    userChoice.addEventListener('click', () => {
        let userChoosed = userChoice.getAttribute('id')
        let compChoosed = chooseArray()

        if (compChoosed == 'rock'){
            computerChoosedDisplay.style.width = '50px'
            computerChoosedDisplay.src = './Assets/rock.png'
        } else if (compChoosed == 'paper'){
            computerChoosedDisplay.style.width = '30px'
            computerChoosedDisplay.src = './Assets/paper.png'
        } else {
            computerChoosedDisplay.style.width = '50px'
            computerChoosedDisplay.src = './Assets/scissors.png'
        }

        playGame(userChoosed, compChoosed)
    })
})