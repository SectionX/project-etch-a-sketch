function activate(e) {
    if (!mousedown) return;
    e.target.classList.add("activated");
}

// function stopdraw(e, nodelist = cells) {
//     // if (e.target.classList[0] != 'cell') return;
//     console.log("stopdraw");
//     nodelist.forEach(node => node.removeEventListener("mouseover", activate));
// }

const board = document.querySelector(".game");
boardside = +(getComputedStyle(board)['width'].toString()).substr(0,3)-2;

let cell;
let cells = []
let cellnumber = 9;
let cellside = boardside / cellnumber;
console.log(cellside);
let len = (boardside*boardside/(cellside*cellside));
let interval;
let mousedown;

console.log(len);
for (let i = 0; i < len; i++) {
    cell = document.createElement('div');
    cell.style = `width:${cellside}px; height:${cellside}px;`;
    cell.classList.add('cell');
    cell.addEventListener('mouseover', activate)
    cell.addEventListener('mousedown', () => mousedown = true);
    cell.addEventListener('mouseup', () => mousedown = false);
    cells.push(cell);
    board.appendChild(cell);
}

const body = document.querySelector("body");


