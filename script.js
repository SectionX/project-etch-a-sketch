function determineLen (boardside, cellside) {
    return Math.pow(boardside,2)/Math.pow(cellside,2);

}

function activate(e) {
    if (!mousedown) return;
    if (!rainbowtoggle || erasertoggle) {
        e.target.style['background-color'] = colorlist[colorindex];
    } else {
        let result1;
        let result2;
        let result3;
        if (!e.target.style['background-color'] || e.target.style['background-color'] == 'white') {
            result1 = Math.floor(Math.random()*255);
            result2 = Math.floor(Math.random()*255);
            result3 = Math.floor(Math.random()*255);
            e.target.style['background-color'] = `rgb(${result1}, ${result2}, ${result3}`;
        } else {
            let clr = e.target.style['background-color'].slice(4,-1).split(", ");
            clr = clr.map(n => (+n-25 < 0) ? 0 : +n-25);
            e.target.style['background-color'] = `rgb(${clr[0]}, ${clr[1]}, ${clr[2]})`;
        }
    }
}


// Declarations

const board = document.querySelector(".game");
const reset = document.querySelector(".reset");
const rainbow = document.querySelector(".rainbowmode");
const colorpicker = document.querySelector(".colorpicker");
const eraser = document.querySelector(".eraser");

// Toggles

let mousedown = false;
let rainbowtoggle = false;
let erasertoggle = false;


let cell;
let cells = []
const cellnumbers = [8, 16, 32, 64, 80]              

const colorlist = ["black", "red", "green", "blue", "white"];
let colorindex = 0;

boardside = +(getComputedStyle(board)['width']).slice(0,-2)-2;

// Initializing the app at 64x64.

board.addEventListener('mousedown', (e) => {mousedown = true; activate(e);});
board.addEventListener('mouseup', () => mousedown = false);

let cellnumberindex = 3; // 3 corresponds to 64x64 board               
let cellnumber = cellnumbers[cellnumberindex];   
let cellside = boardside / cellnumber;
let len = determineLen(boardside, cellside);

console.log(len);
for (let i = 0; i < len; i++) {
    cell = document.createElement('div');
    cell.style = `width:${cellside}px; height:${cellside}px;`;
    cell.classList.add('cell');
    cell.addEventListener('mouseover', activate);
    cells.push(cell);
    board.appendChild(cell);
}


// Reset button


reset.addEventListener("click", () => cells.forEach(cell => {
    cell.classList.remove("activated");
    cell.style["background-color"]="white";
}));


// Toggle Rainbow Mode


rainbow.addEventListener("click", () => {
    rainbowtoggle = !(rainbowtoggle);
    // console.log(rainbowtoggle);
});


// Color picker (v1)


colorpicker.addEventListener("click", () => {
    colorindex = (colorindex+1)%4;
    eraser.textContent = "Eraser";
    erasertoggle = false
});


// Eraser (v1)


eraser.addEventListener("click", () => {
    colorindex = (colorindex < 4) ? 4 : 0;
    eraser.textContent = (colorindex < 4) ? "Eraser" : "Pen";
    erasertoggle = !erasertoggle
    if (eraser.textContent == "Pen" && colorindex != 4) {
        eraser.textContent = "Eraser";
        colorindex = 0;
    }
});

// Set dimensions (v1)

const dimensions = document.querySelector(".resolutionpicker");
dimensions.addEventListener("click", () => {
    board.innerHTML = "";
    cellnumberindex = (cellnumberindex + 1) % 5;
    cellnumber = cellnumbers[cellnumberindex];
    cellside = boardside / cellnumber;
    len = determineLen(boardside, cellside);
    cells = []


for (let i = 0; i < len; i++) {
    cell = document.createElement('div');
    cell.style = `width:${cellside}px; height:${cellside}px;`;
    cell.classList.add('cell');
    cell.addEventListener('mouseover', activate);
    cells.push(cell);
    board.appendChild(cell);
}

});
