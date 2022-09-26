function activate(e) {
    e.target.classList.add("activated");
}

function draw (e, nodelist = cells) {
    // if (e.target.classList[0] != 'cell') return;
    console.log("draw");
    nodelist.forEach(node => node.addEventListener("mouseover", activate));
}

function stopdraw(e, nodelist = cells) {
    // if (e.target.classList[0] != 'cell') return;
    console.log("stopdraw");
    nodelist.forEach(node => node.removeEventListener("mouseover", activate));
}

const board = document.querySelector(".game");
boardside = +(getComputedStyle(board)['width'].toString()).substr(0,3)-2;

let cell;
let cells = []
let cellnumber = 64;
let cellside = boardside / cellnumber;
console.log(cellside);
let len = (boardside*boardside/(cellside*cellside));
let interval;

console.log(len);
for (let i = 0; i < len; i++) {
    cell = document.createElement('div');
    cell.style = `width:${cellside}px; height:${cellside}px;`;
    cell.classList.add('cell');
    cells.push(cell);
    board.appendChild(cell);
}

window.addEventListener('mousedown', draw, capture=true);
window.addEventListener('mouseup', stopdraw, capture=true);