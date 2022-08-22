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
sliderValue.textContent = `${slider.value}x${slider.value}`;
sliderValue.classList.toggle('slidervalue');
sliderContainer.appendChild(sliderValue);

// DEFAULT GRID 
grid(); paint();

//EVENT LISTENERS
slider.addEventListener('input', refreshGrid);
randBtn.addEventListener('click', btnStatusChange);

// color.addEventListener('input', changeColor);



//FUNCTIONS

function refreshGrid(){
    //removes current grid, adds new grid based on slidervalue

    sliderValue.textContent = `${slider.value}x${slider.value}`;

    //REMOVE CURRENT GRID
    while (boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.lastChild);
    };
    //NEW GRID
    grid(slider.value);
};


// if (randBtnOn === true){
//             box.style.backgroundColor = randomizeColor(true);    
//         } else box.style.backgroundColor = pointerColor;



function grid( boxAmount = 16 ){
    // Make grid with optional parameter (sqrt of amount of boxes)
    for (let i=0; i<boxAmount; i++){
        let row = document.createElement('div');
        row.classList.toggle('row');
        row.style.cssText = `width: 500px; height: ${500/boxAmount}px;`
        boxContainer.appendChild(row);
        for (let i=0; i<boxAmount; i++){
            let divBox = document.createElement('div');
            divBox.classList.toggle('box');
            divBox.style.cssText = `width: ${500/boxAmount}px; height: auto;`
            row.appendChild(divBox);
        };
    };
};

function changeBackgroundColor(){ 
    // Adding eventListener to all the tiny boxes on the grid: if hover, change backgroundcolor
    const boxes = document.querySelectorAll('.box');
    boxes.forEach( (box) => {
        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'rgb(77,77,255)';
        });

        box.addEventListener('mouseout', () => {
        box.style.backgroundColor = 'white';
        });
    });
};


function paint(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach( box => {
        box.addEventListener('mousedown', ()=>{
            box.style.backgroundColor='purple';
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
    
    return colorValue
};

function randomizeColor(inColor){
    //if inColor === true, do the randomizer in color, otherwise its a shade of grey
    if (inColor){
        return `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    } 
    const amountOfDarkness = Math.random()*255;
    return `rgb(${amountOfDarkness}, ${amountOfDarkness}, ${amountOfDarkness})`;
};