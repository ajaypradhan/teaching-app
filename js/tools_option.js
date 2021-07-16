const pen = document.querySelector('#pen');
const eraser = document.querySelector('#eraser');
const penOption = document.querySelector('.pen-option');
const eraserOption = document.querySelector('.eraser-option');

pen.addEventListener('click', function () {
    eraserOption.classList.remove('select');
    penOption.classList.toggle('select');
});

eraser.addEventListener('click', function () {
    penOption.classList.remove('select');
    eraserOption.classList.toggle('select');
});
