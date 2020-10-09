// ----------------------------------- Button -------------------------------------
let button = document.getElementById('start');

button.addEventListener('click', () => {
    alert('Let the Game Begin');
    button.disabled = true;
})
// ------------------------------ Cell Status -------------------------------------
let cell = document.querySelectorAll('.cell')
let error = document.getElementById('error-message')
for (let item of cell) {
    item.addEventListener('click', function cellFiller() {
        if (player === "X") {
            item.textContent = "X";
            item.style.fontSize = "250px"
            item.style.justifyContent = 'center';
            item.removeEventListener('click', cellFiller)
        }
        else if (player === "O") {
            item.textContent = "O";
            item.style.fontSize = "250px";
            item.style.justifyContent = 'center';
            item.removeEventListener('click', cellFiller)
        }
        changeStatus()
    })
}

// ------------------------------ Player Status -----------------------------------
let player = 'X'
let computer = "O"
let statusDisplay = document.getElementById('player-turn')

function changeStatus() {
    player = player === "X" ? "O" : "X";
    statusDisplay.innerHTML = "Player Turn: " + player
}
// --------------------------------- Win Condition ---------------------------------
let cells = Array.from(document.querySelectorAll('.cell'));
let playerArray = []
let computerArray = []


function playerIndex(event){
    let id = event.target.id;
    // can now put cells in array at specific index
   playerArray[parseInt(id)] = player === "X" ? "O" : "X"; // turn thingy mikwe not work
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