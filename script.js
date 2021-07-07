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

//draw on board

let isPenDown = false;

canvas.addEventListener('mousedown', function (e) {
    isPenDown = true;
    let x = e.clientX - 308;
    let y = e.clientY - 31;
    ctx.beginPath();
    ctx.moveTo(x, y);
});

canvas.addEventListener('mousemove', function (e) {
    if (isPenDown) {
        let x = e.clientX - 308;
        let y = e.clientY - 31;
        ctx.lineTo(x, y);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', function (e) {
    isPenDown = false;
});
