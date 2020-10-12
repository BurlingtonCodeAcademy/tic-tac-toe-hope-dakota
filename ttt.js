// -------------------------------- Button -------------------------------------
let compHumButton = document.getElementById('compHum');
let hum2Button = document.getElementById('hum2');
let cell = document.querySelectorAll('.cell')

compHumButton.addEventListener('click', () => {
    compHumButton.disabled = true;
    for (let item of cell) {
        item.addEventListener('click', cellFiller)
    }
})

hum2Button.addEventListener('click', () => {
    hum2Button.disabled = true;
    for (let item of cell) {
        item.addEventListener('click', cellFiller)
    }
})
// ------------------------------ Cell Status ----------------------------------
let winner = false
function cellFiller(event) {
    if (player === "X") {
        event.target.textContent = "X";
        event.target.style.fontSize = "150px"
        event.target.style.justifyContent = 'center';
        event.target.removeEventListener('click', cellFiller)
        playerIndex(event)
    }
    else if (player === "O") {
        event.target.textContent = "O";
        event.target.style.fontSize = "150px";
        event.target.style.justifyContent = 'center';
        event.target.removeEventListener('click', cellFiller)
        compIndex(event)
    }
    chickenDinner()
    changeStatus()
}
function playerIndex(event) {
    let id = event.target.id;
    playerArray[parseInt(id)] = "X"
}
function compIndex(event) {
    let id = event.target.id;
    computerArray[parseInt(id)] = "O"
}
function computerMove() {
    let ranNum = Math.floor(Math.random() * 9);
    let randCell = document.getElementById(ranNum.toString())
    if (randCell.textContent !== "O" && randCell.textContent !== "X") {
        randCell.click()
    } else if (winner === false) {
        return computerMove()
    } else if (winner === false && randCell.textContent === "O" || randCell.textContent === "X") {
        statusDisplay.textContent = "Its a tie"
    }
}

// ------------------------------ Player Status --------------------------------
let player = 'X'
let statusDisplay = document.getElementById('player-turn')


function changeStatus() {
    player = player === "X" ? "O" : "X";
    statusDisplay.innerHTML = 'Player Turn: ' + player
    if (player === "O" && compHumButton.disabled === true && winner === false) {
        computerMove()
    } else if (winner === true) {
        chickenDinner()
    }
}
// ------------------------------- Name Input ---------------------------------
let playerName = document.getElementById('nameSubmit')
let nameIn = document.getElementById('nameIn')
let namePlayer = document.getElementById('playerNames')

playerName.addEventListener('submit', (event) => {
    event.preventDefault()
    let name = nameIn.value
    namePlayer.textContent += name + " is player X"
})
// ------------------------------- Win Condition -------------------------------
let cells = Array.from(document.querySelectorAll('.cell'));
let playerArray = []
let computerArray = []

function chickenDinner() {
    for (let item of winningCells) {
        let a = item[0]
        let b = item[1]
        let c = item[2]
        if (playerArray[a] && playerArray[b] && playerArray[c]) {
            statusDisplay.textContent = "Player X is the winner"
            for (let item of cells) {
                item.removeEventListener('click', cellFiller)
            }
            winner = true;
        }
        else if (computerArray[a] && computerArray[b] && computerArray[c]) {
            statusDisplay.textContent = "Player O is the winner"
            for (let item of cells) {
                item.removeEventListener('click', cellFiller)
            }
            winner = true
        }
    }
}

let winningCells = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

