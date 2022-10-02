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

    color = document.querySelector("#colorpicker").value
    e.target.style['background-color'] = color;
    e.target.setAttribute("data-initialcolor", color);
    return;

}



// Declarations

const board = document.querySelector(".game");
const reset = document.querySelector(".reset");
const rainbowmode = document.querySelector(".rainbowmode");
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


// Initializing the app at 64x64.

boardside = 320;

board.addEventListener('mousedown', (e) => {mousedown = true; activate(e);});
board.addEventListener('mouseup', () => mousedown = false);

initialize();

// Button event listeners:

reset.addEventListener("click", initialize);


rainbowmode.addEventListener("click", () => {
    rainbowtoggle = !(rainbowtoggle);
    if (rainbowmode.textContent == "Normal Mode") {
        rainbowmode.textContent = "Rainbow Mode!";
    } else {
        rainbowmode.textContent = "Normal Mode";
    }
});


eraser.addEventListener("click", () => {
    erasertoggle = !erasertoggle;
    console.log(erasertoggle);
    if (eraser.textContent == "Pen") {
        eraser.textContent = "Eraser";
    } else {
        eraser.textContent = "Pen";
    }
});


resolution.addEventListener("click", () => {
    board.innerHTML = "";
    cellnumberindex = (cellnumberindex + 1) % 5;
    initialize();

});


