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

// console.log(boxes)

boxes.forEach( (box) => {
    box.addEventListener('mouseover', () => {
        box.classList.toggle('boxhovered');
    });
    box.addEventListener('mouseout', () => {
        box.classList.toggle('boxhovered');
    });
});