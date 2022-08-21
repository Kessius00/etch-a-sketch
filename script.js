// CONSTANTS
const sliderContainer = document.querySelector('.sliderContainer');
const sliderValue = document.createElement('div');
const slider = document.querySelector('.slider');
const boxContainer = document.querySelector('.boxContainer');

//IMPORT SLIDERVALUE IN HTML
sliderValue.textContent = slider.value;
sliderValue.classList.toggle('slidervalue');
sliderContainer.appendChild(sliderValue);

// DEFAULT GRID 
grid();
changeColorHover();


slider.addEventListener('input', () => {
    // Update the current slider value (each time you drag the slider handle)
    
    //NEW AMOUNT OF BOXES
    const boxAmount = slider.value;
    sliderValue.textContent = boxAmount;

    //REMOVE CURRENT GRID
    while (boxContainer.firstChild) {
        boxContainer.removeChild(boxContainer.lastChild);
    };

    //NEW GRID
    // boxAmount = Math.sqrt(boxAmount)     TO MAKE THE BOXES BIGGER
    grid(boxAmount);
    changeColorHover();

});



//FUNCTIONS
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

function changeColorHover(){ 
    // Adding eventListener to all the tiny boxes on the grid: if hover, change backgroundcolor
    
    const boxes = document.querySelectorAll('.box');
    boxes.forEach( (box) => {
        box.addEventListener('mouseover', () => {
        // box.classList.toggle('boxhovered');
        // Trying to have each box have a randomColor
        box.style.backgroundColor = randomColor();
        });

        box.addEventListener('mouseout', () => {
        // box.classList.toggle('boxhovered');
        box.style.backgroundColor = 'white';
        });
    });
};

function randomColor(listOfColors=['black']){
    //function which returns a random color from a list of colors
    if (listOfColors.length === 1){
        listOfColors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    };
    const index = Math.floor(Math.random()*listOfColors.length);
    return listOfColors[index]
};
