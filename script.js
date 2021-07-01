const videoElement = document.querySelector("video");
const whiteBG = document.querySelector('.white');
const blackBG = document.querySelector('.black');

(async function () {
    let constraint = { video: true };
    let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
    videoElement.srcObject = mediaStream;
})();


