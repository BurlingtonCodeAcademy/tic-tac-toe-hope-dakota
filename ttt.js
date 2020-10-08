// ----------------------------- Button -----------------------------
let button = document.getElementById('start');

button.addEventListener('click', () => {
    alert('Let the Game Begin');
    button.disabled = true;
})
// ----------------------------- Cell EventListeners -------------------------------
let cell = document.querySelectorAll('.cell')
for (let item of cell) {
    item.addEventListener('click', () => {
        item.style.backgroundColor = "pink";
        item.disabled = true;
    }) 
}
// ------------------------------- Player Status -----------------------------------
let player = "X"
let computer = "O"
  