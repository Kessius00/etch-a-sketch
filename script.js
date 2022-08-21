// CONSTANTS
const sliderContainer = document.querySelector('.sliderContainer');
const sliderValue = document.createElement('div');
const slider = document.querySelector('.slider');
const boxContainer = document.querySelector('.boxContainer');
const color = document.querySelector('#head');
const randBtn = document.querySelector('#randBtn');
let pointerColor = '#000000';
let randBtnOn = false;




//IMPORT SLIDERVALUE IN HTML
sliderValue.textContent = slider.value;
sliderValue.classList.toggle('slidervalue');
sliderContainer.appendChild(sliderValue);

// DEFAULT GRID 
grid(); changeBackgroundColor();

//EVENT LISTENERS
slider.addEventListener('input', refreshGrid);
randBtn.addEventListener('click', btnStatusChange);
// color.addEventListener('input', changeColor);



//FUNCTIONS

function refreshGrid(){
    //removes current grid, adds new grid based on slidervalue

    const boxAmount = slider.value;
    sliderValue.textContent = boxAmount;

    //REMOVE CURRENT GRID
    while (boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.lastChild);
    };

    //NEW GRID
    // boxAmount = Math.sqrt(boxAmount)     optional: IT IS TO MAKE THE BOXES BIGGER
    grid(boxAmount);
    changeBackgroundColor();
};

function grid( boxAmount = 16 ){
    // Make grid with optional parameter (sqrt of amount of boxes)
    for (let i=0; i<boxAmount; i++){
        let row = document.createElement('div');
        row.classList.toggle('row');
        row.style.cssText = `width: 600px; height: ${600/boxAmount}px;`
        boxContainer.appendChild(row);
        for (let i=0; i<boxAmount; i++){
            let divBox = document.createElement('div');
            divBox.classList.toggle('box');
            divBox.style.cssText = `width: ${600/boxAmount}px; height: auto;`
            row.appendChild(divBox);
        };
    };
};

function changeBackgroundColor(){ 
    // Adding eventListener to all the tiny boxes on the grid: if hover, change backgroundcolor
    
    const boxes = document.querySelectorAll('.box');
    boxes.forEach( (box) => {
        box.addEventListener('mouseover', () => {

        if (randBtnOn === true){
            box.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;    
        } else box.style.backgroundColor = pointerColor;
        });

        box.addEventListener('mouseout', () => {
        box.style.backgroundColor = 'white';
        });
    });
};


function btnStatusChange(){
    if (randBtnOn===true){
        randBtnOn=false;
    } else randBtnOn = true;
};

function changeColor(){
    const colorValue = color.value;
    
    return true
};