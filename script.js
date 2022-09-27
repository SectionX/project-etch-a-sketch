function determineLen (boardside, cellside) {
    return Math.pow(boardside,2)/Math.pow(cellside,2);

}

function activate(e) {
    if (!mousedown) return;
    e.target.style['background-color'] = colorlist[colorindex];
}

// function activatetouch(e) {
//     e.target.classList.add("activated");
// }


// Determine cell size to create dynamically

const board = document.querySelector(".game");
boardside = +(getComputedStyle(board)['width'].toString()).substr(0,3)-2;

let cell;
let cells = []
const cellnumbers = [8, 16, 32, 64]              // Implementing this dynamically
let cellnumberindex = 3;                         // will probably require some
let cellnumber = cellnumbers[cellnumberindex];   // either refresh or deleting elements
let cellside = boardside / cellnumber;
let len = determineLen(boardside, cellside);
let mousedown = false;
let rainbowtoggle = false;

const colorlist = ["black", "red", "green", "blue", "white"];
let colorindex = 0;

// Add drawing behavior

console.log(len);
for (let i = 0; i < len; i++) {
    cell = document.createElement('div');
    cell.style = `width:${cellside}px; height:${cellside}px;`;
    cell.classList.add('cell');
    cell.addEventListener('mouseover', activate);
    // cell.addEventListener('touchmove', activatetouch);
    cell.addEventListener('mousedown', () => mousedown = true);
    cell.addEventListener('mouseup', () => mousedown = false);
    cells.push(cell);
    board.appendChild(cell);
}


// Reset button

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => cells.forEach(cell => {
    cell.classList.remove("activated");
    cell.style["background-color"]="white";
}));


// Toggle Rainbow Mode

const rainbow = document.querySelector(".rainbowmode");
rainbow.addEventListener("click", () => {
    rainbowtoggle = !(rainbowtoggle);
    // console.log(rainbowtoggle);
});


// Color picker (v1)

const colorpicker = document.querySelector(".colorpicker");
colorpicker.addEventListener("click", () => colorindex = (colorindex+1)%4)


// Eraser (v1)

const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", () => {
    colorindex = (colorindex < 4) ? 4 : 0;
    eraser.textContent = (colorindex < 4) ? "Eraser" : "Pen";
    if (eraser.textContent == "Pen" && colorindex != 4) {
        eraser.textContent = "Eraser";
        colorindex = 0;
    }
});

// Set dimensions (v1)

const dimensions = document.querySelector(".resolutionpicker");
dimensions.addEventListener("click", () => {
    board.innerHTML = "";
    cellnumberindex = (cellnumberindex + 1) % 4;
    cellnumber = cellnumbers[cellnumberindex];
    cellside = boardside / cellnumber;
    len = determineLen(boardside, cellside);
    cells = []


for (let i = 0; i < len; i++) {
    cell = document.createElement('div');
    cell.style = `width:${cellside}px; height:${cellside}px;`;
    cell.classList.add('cell');
    cell.addEventListener('mouseover', activate);
    cell.addEventListener('mousedown', () => mousedown = true);
    cell.addEventListener('mouseup', () => mousedown = false);
    cells.push(cell);
    board.appendChild(cell);
}

});


