const pen = document.querySelector('#pen');
const eraser = document.querySelector('#eraser');

const penOption = document.querySelector('.pen-option');
const eraserOption = document.querySelector('.eraser-option');

const penSize = document.querySelector('#penSize');
const eraserSize = document.querySelector('#eraserSize');

const blackPen = document.querySelector('.black-pen');
const bluePen = document.querySelector('.blue-pen');
const redPen = document.querySelector('.red-pen');

let currentPenSize = 1;
let currentPenColor = 'black';
let currentEraserSize = 1;

pen.addEventListener('click', function () {
    penOption.classList.toggle('select');
    eraserOption.classList.remove('select');
    ctx.lineWidth = currentPenSize;
    ctx.strokeStyle = currentPenColor;
});

penSize.addEventListener('change', function () {
    let penSizeValue = penSize.value;
    currentPenSize = penSizeValue;
    ctx.lineWidth = currentPenSize;
    ctx.strokeStyle = 'black';
});

blackPen.addEventListener('change',function(){
    currentPenSize = penSizeValue;
    ctx.lineWidth = currentPenSize;
    ctx.strokeStyle = 'black';
})

bluePen.addEventListener('change',function(){
    currentPenSize = penSizeValue;
    ctx.lineWidth = currentPenSize;
    ctx.strokeStyle = 'blue';
})

redPen.addEventListener('change',function(e){
    // currentPenSize = penSizeValue;
    // ctx.lineWidth = currentPenSize;
    // ctx.strokeStyle = 'red';
    console.log(e);
})


eraser.addEventListener('click', function () {
    eraserOption.classList.toggle('select');
    penOption.classList.remove('select');
    ctx.strokeStyle = 'white';
    ctx.lineWidth = currentEraserSize;
});

eraserSize.addEventListener('click', function () {
    let eraserSizeValue = eraserSize.value;
    currentEraserSize = eraserSizeValue;
    ctx.lineWidth = currentEraserSize;
});
