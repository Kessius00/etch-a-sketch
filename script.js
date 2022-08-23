//CONSTANTS
const boxContainer = document.querySelector('.boxContainer');
const slider = document.querySelector('.slider');
const color = document.querySelector('#color');
const gridSize = document.querySelector('.gridSize');




createDivs();
createGrid(slider.value); displayGridSize();

//EVENTLISTENERS
slider.addEventListener('input', refreshGrid);




//FUNCTIONS
function refreshGrid(){
    removeCurrentGrid();
    createDivs(slider.value);
    createGrid(slider.value);
    displayGridSize();
}

function displayGridSize(){
    gridSize.textContent = `${slider.value}x${slider.value}`;
}

function removeCurrentGrid(){
    while (boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.lastChild);
    };
}

function createDivs( amount = 16 ){
    // Make grid with optional parameter (sqrt of amount of boxes)
    for (let i=0; i<(amount**2); i++){
        let box = document.createElement('div');
        box.classList.toggle('box');
        boxContainer.appendChild(box);
    };
};

function createGrid(amount){
    boxContainer.style.cssText=`grid-template-columns: repeat(${amount}, auto);`;
}