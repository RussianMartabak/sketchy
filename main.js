const pad = document.querySelector('.sketch-pad');
let mousehold;

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