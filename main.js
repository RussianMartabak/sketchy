const pad = document.querySelector('.sketch-pad');
const button = document.querySelector('#change-pad');
let mousehold;
button.addEventListener('click', e => changePad());

intializePad(16);
isMouseDown();

function intializePad(sideGrids){
    pad.style.cssText = `grid-template-columns: repeat(${sideGrids}, 1fr)`;
    totalGrid = sideGrids * sideGrids;
    for (let i = 0; i < totalGrid; i++){
        let grid = document.createElement('div');
        grid.classList.add('grid')
        pad.appendChild(grid)
    }
    let grids = document.querySelectorAll('.grid')
    grids.forEach(grid => grid.addEventListener('mouseover', e => {
        if (!mousehold) return;
        e.target.style.cssText = 'background-color: black;';

        }));
}
function isMouseDown(){
    let status = false;
    window.addEventListener('mousedown', e => {
        
        mousehold = true;
    });
    window.addEventListener('mouseup', e => mousehold = false)
    console.group(status)
    
}

function changePad(){
    let input = parseInt(prompt('Enter the number of pixels per side. The higher the clearer the image is but its capped at 100'));
    console.log(input);
    if (!input || input < 1 || input > 100) return;
    let grids = document.querySelectorAll('.grid');
    grids.forEach(grid => grid.remove());
    intializePad(input);
    
}

