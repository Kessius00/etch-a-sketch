function row(){
    for (let i=0; i<16; i++){
        const row = document.createElement('div');
        row.classList.toggle('row');
        document.body.appendChild(row);
        for (let i=0; i<16; i++){
            const divBox = document.createElement('div');
            divBox.classList.toggle('box');
            row.appendChild(divBox);
        };
    };
};

row();

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


const slideContainer = document.createElement('div');;
const sliderInput = document.getElementsByClassName('.slider');

console.log(sliderInput);
