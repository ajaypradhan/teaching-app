const videoElement = document.querySelector('video');
const canvas = document.getElementById('myCanvas');
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
