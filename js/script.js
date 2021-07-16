//video element
const videoElement = document.querySelector('video');

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

//draw on board

let isPenDown = false;

canvas.addEventListener('mousedown', function (e) {
    console.log('Inside mouse down');
    isPenDown = true;
    let x = e.clientX - 308;
    let y = e.clientY - 31;
    ctx.beginPath();
    ctx.moveTo(x, y);

    let pointObj = {
        x: x,
        y: y,
        type: 'md',
    };
    line.push(pointObj);
});

canvas.addEventListener('mousemove', function (e) {
    if (isPenDown) {
        console.log('Inside mousemove');
        let x = e.clientX - 308;
        let y = e.clientY - 31;
        ctx.lineTo(x, y);
        ctx.stroke();

        let pointObj = {
            x: x,
            y: y,
            type: 'mm',
        };
        line.push(pointObj);
    }
});

canvas.addEventListener('mouseup', function (e) {
    isPenDown = false;
    linesDB.push(line);
    line = [];

    console.log(linesDB);
});

