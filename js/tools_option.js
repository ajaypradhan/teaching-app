const pen = document.querySelector('#pen');
const eraser = document.querySelector('#eraser');
const penOption = document.querySelector('.pen-option');
const eraserOption = document.querySelector('.eraser-option');

pen.addEventListener('click', function () {
    penOption.classList.toggle('select');
    eraserOption.classList.remove('select');
});

eraser.addEventListener('click', function () {
    eraserOption.classList.toggle('select');
    penOption.classList.remove('select');
});
