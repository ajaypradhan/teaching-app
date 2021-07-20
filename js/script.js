//video element
const videoElement = document.querySelector('video');
//gallery
const gallery = document.querySelector('.gallery');
//canvas section
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// button to change the background of board
const whiteBG = document.querySelector('.white');
const blackBG = document.querySelector('.black');

//start camera as soon a site open
(async function () {
    let constraint = { video: true };
    let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
    videoElement.srcObject = mediaStream;
})();

// change background of canvas
whiteBG.addEventListener('click', function () {
    canvas.setAttribute('style', 'background-color:white');
});

blackBG.addEventListener('click', function () {
    canvas.setAttribute('style', 'background-color:black');
});

//line store in array

let linesDB = [];
let line = [];
let redoLinesDB = [];

//draw on board

let isPenDown = false;

canvas.addEventListener('mousedown', function (e) {
    if (redoLinesDB.length) {
        redoLinesDB = [];
      }
    // console.log('Inside mouse down');
    isPenDown = true;
    let x = e.clientX - 308;
    let y = e.clientY - 31;
    ctx.beginPath();
    ctx.moveTo(x, y);

    let pointObject  = {
        x: x,
        y: y,
        type: 'md',
    };
    line.push(pointObject );
});

canvas.addEventListener('mousemove', function (e) {
    if (isPenDown) {
        console.log('Inside mousemove');
        let x = e.clientX - 308;
        let y = e.clientY - 31;
        ctx.lineTo(x, y);
        ctx.stroke();

        let pointObject  = {
            x: x,
            y: y,
            type: 'mm',
        };
        line.push(pointObject );
    }
});

canvas.addEventListener('mouseup', function (e) {
    isPenDown = false;
    linesDB.push(line);
    line = [];

    console.log(linesDB);
});

gallery.addEventListener('click', function () {
    window.location.assign('document.html');
});
