const pen = document.querySelector('#pen');
const eraser = document.querySelector('#eraser');
const highlighter = document.querySelector('#highlighter');
const penOption = document.querySelector('.pen-option');
const eraserOption = document.querySelector('.eraser-option');
const highlighterOption = document.querySelector('.highlighter-option');

pen.addEventListener('click', function () {
    penOption.classList.toggle('select');
    eraserOption.classList.remove('select');
    highlighterOption.classList.remove('select');
});

eraser.addEventListener('click', function () {
    eraserOption.classList.toggle('select');
    penOption.classList.remove('select');
    highlighterOption.classList.remove('select');
});

highlighter.addEventListener('click', function () {
    highlighterOption.classList.toggle('select');
    penOption.classList.remove('select');
    eraserOption.classList.remove('select');
});
