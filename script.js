// Make grid with optional parameter (sqrt of amount of boxes)
function grid(boxAmount=16){
    for (let i=0; i<boxAmount; i++){
        const row = document.createElement('div');
        row.classList.toggle('row');
        document.body.appendChild(row);
        for (let i=0; i<boxAmount; i++){
            const divBox = document.createElement('div');
            divBox.classList.toggle('box');
            row.appendChild(divBox);
        };
    };
};


const output = document.createElement('div')
const slider = document.querySelector('.slider');

output.textContent = slider.value; // Display the default slider value
document.body.appendChild(output);

grid();

// Update the current slider value (each time you drag the slider handle)
slider.addEventListener('input', () => {
    const boxAmount = slider.value;
    output.textContent = boxAmount;
    grid(boxAmount);
});

// Adding eventListener to all the tiny boxes on the grid: if hover, change backgroundcolor
const boxes = document.querySelectorAll('.box');
boxes.forEach( (box) => {
    box.addEventListener('mouseover', () => {
        // box.style.cssText = "background-color: green;";
        box.classList.toggle('boxhovered');
    });
    box.addEventListener('mouseout', () => {
        box.classList.toggle('boxhovered');
    });
});


