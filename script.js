function activate(e) {
    if (!mousedown) return;
    e.target.classList.add("activated");
}

function activatetouch(e) {
    e.target.classList.add("activated");
}

const board = document.querySelector(".game");
boardside = +(getComputedStyle(board)['width'].toString()).substr(0,3)-2;

let cell;
let cells = []
let cellnumber = 64;
let cellside = boardside / cellnumber;
console.log(cellside);
let len = (boardside*boardside/(cellside*cellside));
let mousedown;

console.log(len);
for (let i = 0; i < len; i++) {
    cell = document.createElement('div');
    cell.style = `width:${cellside}px; height:${cellside}px;`;
    cell.classList.add('cell');
    cell.addEventListener('mouseover', activate);
    cell.addEventListener('touchmove', activatetouch);
    cell.addEventListener('mousedown', () => mousedown = true);
    cell.addEventListener('mouseup', () => mousedown = false);
    cells.push(cell);
    board.appendChild(cell);
}

const body = document.querySelector("body");


