//CONSTANTS
const boxContainer = document.querySelector('.boxContainer');
const slider = document.querySelector('.slider');
const color = document.querySelector('#color');
const gridSize = document.querySelector('.gridSize');
const btns = document.querySelectorAll('button');
let mouseDown = false; 
let selectedButton = 'randBtn';
let darkness = 255;

//DEFAULT SETTINGS
createDivs(); createGrid(16); displayGridSize();

//EVENTLISTENERS
document.body.addEventListener('mousedown', ()=>{
    mouseDown=true;
});
document.body.addEventListener('mouseup', ()=>{
    mouseDown=false;
});

slider.addEventListener('input', refreshGrid);
let divBox = document.querySelectorAll('.box');

btns.forEach((btn)=>{
    btn.addEventListener('click', selectBtn);
});

mouseDrawing();

//FUNCTIONS
function mouseDrawing(){
    divBox.forEach( (box) => {
        box.addEventListener('mousedown', ()=>{
            changeBackground(selectedButton, box);
            });
        box.addEventListener('mouseover', () => {
            if (mouseDown) {
                changeBackground(selectedButton, box);
            };
        });
    });
}

function changeBackground(selectedButton, box){
    switch(selectedButton){
        case 'randBtn':
            box.style.backgroundColor = randomizeColor();
            break;
        case 'shadeBtn':
            box.style.backgroundColor = randomizeShade();
            break;
        case 'eraser':
            box.style.backgroundColor = 'rgb(246, 236, 255)';
            break;
        case 'colorChoose':
            box.style.backgroundColor = color.value;
            break;
        case 'incDark':
            incrementallyDarken(box);
            break;
    };
}

function incrementallyDarken(box){
    let brightness = 0;
    if (box.value===undefined){
        box.value = 0;
    };

    box.value += 1; 

    if (box.value>10){
        box.style.backgroundColor = 'rgb(0,0,0)'
    };

    switch(box.value){
        case 1:
            box.style.backgroundColor = `rgb(${darkness}, ${darkness}, ${darkness})`;
            break;
        case 2: 
            brightness = darkness*0.9;
            box.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
            break;
        case 3: 
            brightness = darkness*0.8;
            box.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
            break;
        case 4: 
            brightness = darkness*0.7;
            box.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
            break;
        case 5: 
            brightness = darkness*0.6;
            box.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
            break;
        case 6: 
            brightness = darkness*0.5;
            box.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
            break;
        case 7: 
            brightness = darkness*0.4;
            box.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
            break;
        case 8: 
            brightness = darkness*0.3;
            box.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
            break;
        case 9: 
            brightness = darkness*0.2;
            box.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
            break;
        case 10: 
            brightness = darkness*0.1;
            box.style.backgroundColor = `rgb(${brightness}, ${brightness}, ${brightness})`;
            break;
    };

}

function selectBtn(){
    const btn = document.querySelector(`#${this.id}`);
    btns.forEach((butn)=>{
        if (butn.classList.contains('buttonpressed')){
            butn.classList.toggle('buttonpressed');
        }
    });
    btn.classList.toggle('buttonpressed');
    selectedButton = btn.id;
}

function refreshGrid(){
    removeCurrentGrid();
    createDivs(slider.value);
    createGrid(slider.value);
    displayGridSize();
    divBox = document.querySelectorAll('.box');
    mouseDrawing();


}

function selectPaintMethod(){
    btns.forEach((buton)=>{
        if(buton.classList.contains('buttonpressed')){
            console.log(buton);
        };
    });
}

function displayGridSize(){
    gridSize.textContent = `${slider.value}x${slider.value}`;
}

function removeCurrentGrid(){
    while (boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.lastChild);
    };
}

function createDivs(amount=16){
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
}