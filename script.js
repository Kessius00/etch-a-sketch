//CONSTANTS
const boxContainer = document.querySelector('.boxContainer');
const slider = document.querySelector('.slider');
const color = document.querySelector('#color');
const gridSize = document.querySelector('.gridSize');
//btns 
// const btnIncDark = document.querySelector('#incDark');
// const btnRandBtn = document.querySelector('#randBtn');
// const btnShade = document.querySelector('#shadeBtn');
// const btnEraser = document.querySelector('#eraser');
// const btnChooseColor = document.querySelector('#colorChoose');
const btns = document.querySelectorAll('button');




//DEFAULT SETTINGS
createDivs(); createGrid(16); displayGridSize();

//EVENTLISTENERS
slider.addEventListener('input', refreshGrid);

btns.forEach((btn)=>{
    btn.addEventListener('click', selectBtn);
});




//FUNCTIONS
function selectBtn(){
    const btn = document.querySelector(`#${this.id}`);
    btns.forEach((butn)=>{
        if (butn.classList.contains('buttonpressed')){
            butn.classList.toggle('buttonpressed');
        }
    });
    btn.classList.toggle('buttonpressed');
}

function refreshGrid(){
    //refresh the grid dependent on the slidervalue
    removeCurrentGrid();
    createDivs(slider.value);
    createGrid(slider.value);
    displayGridSize();
}

function displayGridSize(){
    //Display the size of the grid
    gridSize.textContent = `${slider.value}x${slider.value}`;
}

function removeCurrentGrid(){
    //remove all Child Elements from the parent element (boxContainer in this case)
    while (boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.lastChild);
    };
}

function createDivs(amount=16){
    // Make grid with optional parameter (sqrt of amount of boxes)
    for (let i=0; i<(amount**2); i++){
        let box = document.createElement('div');
        box.classList.toggle('box');
        boxContainer.appendChild(box);
    };
}

function createGrid(amount){
    boxContainer.style.cssText=`grid-template-columns: repeat(${amount}, auto);`;
}

function randomizeColor(){
    return `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
}

function randomizeShade(){
    const amountOfDarkness = Math.random()*255;
    return `rgb(${amountOfDarkness}, ${amountOfDarkness}, ${amountOfDarkness})`;
};