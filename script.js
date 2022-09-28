function initialize () {
    board.innerHTML = "";
    let cellnumber = cellnumbers[cellnumberindex];
    cellside = boardside / cellnumber;

    for (let i = 0; i < Math.pow(cellnumber,2); i++) {
        cell = document.createElement('div');
        cell.style = `width:${cellside}px; height:${cellside}px; background-color:rgb(255, 255, 255);`;
        cell.classList.add('cell');
        cells.push(cell);
        cell.addEventListener('mouseover', activate);
        board.appendChild(cell);
    }

}


function activate(e) {
    if (!mousedown) return;

    if (erasertoggle) {
        e.target.style['background-color'] = 'rgb(255, 255, 255)';
        e.target.removeAttribute('data-initalcolor');
        return;
    }

    if (rainbowtoggle) {
        let rgb = [0,0,0];
        let initclr;
        if (e.target.style['background-color'] == 'rgb(255, 255, 255)') {
            rgb = rgb.map(clr => clr + Math.floor(Math.random()*255));
            e.target.style['background-color'] = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            e.target.setAttribute("data-initialcolor", `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
        } else  {
            rgb = e.target.style['background-color'].slice(4, -1).split(", ");
            initclr = e.target.getAttribute("data-initialcolor").slice(4,-1).split(", ");
            for (let i in rgb) {
                rgb[i] -= initclr[i] ? initclr[i]*0.1 : 25;
            }
            e.target.style['background-color'] = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
        }
        return;
    }

    e.target.style['background-color'] = colorlist[colorindex];
    e.target.setAttribute("data-initialcolor", colorlist[colorindex]);
    return;

}



// Declarations

const board = document.querySelector(".game");
const reset = document.querySelector(".reset");
const rainbowmode = document.querySelector(".rainbowmode");
const colorpicker = document.querySelector(".colorpicker");
const eraser = document.querySelector(".eraser");
const resolution = document.querySelector(".resolutionpicker");

// Toggles

let mousedown = false;
let rainbowtoggle = false;
let erasertoggle = false;


let cell;
let cells = []
const cellnumbers = [8, 16, 32, 64, 80]    
let cellnumberindex = 3;          


const colorlist = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', "white"];
let colorindex = 0;


// Initializing the app at 64x64.

boardside = 320;

board.addEventListener('mousedown', (e) => {mousedown = true; activate(e);});
board.addEventListener('mouseup', () => mousedown = false);

initialize();

// Button event listeners:

reset.addEventListener("click", initialize);


rainbowmode.addEventListener("click", () => {
    rainbowtoggle = !(rainbowtoggle);
});


colorpicker.addEventListener("click", () => {
    colorindex = (colorindex+1)%4;
    eraser.textContent = "Eraser";
    erasertoggle = false
});


eraser.addEventListener("click", () => {
    colorindex = (colorindex < 4) ? 4 : 0;
    eraser.textContent = (colorindex < 4) ? "Eraser" : "Pen";
    erasertoggle = !erasertoggle
    if (eraser.textContent == "Pen" && colorindex != 4) {
        eraser.textContent = "Eraser";
        colorindex = 0;
    }
});


resolution.addEventListener("click", () => {
    board.innerHTML = "";
    cellnumberindex = (cellnumberindex + 1) % 5;
    initialize()

});


