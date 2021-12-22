const pad = document.querySelector('.sketch-pad');

intializePad();

function intializePad(){
    pad.style.cssText = 'grid-template-columns: repeat(16, 1fr)';
    totalGrid = 16 * 16;
    for (let i = 0; i < totalGrid; i++){
        let grid = document.createElement('div');
        grid.classList.add('grid')
        pad.appendChild(grid)
    }
    let grids = document.querySelectorAll('.grid')
}