const videoElement = document.querySelector("video");
const whiteBG = document.querySelector('.white');
const blackBG = document.querySelector('.black');
const board = document.querySelector('.board');


(async function () {
    let constraint = { video: true };
    let mediaStream = await navigator.mediaDevices.getUserMedia(constraint);
    videoElement.srcObject = mediaStream;
})();

blackBG.addEventListener('click',function(){
    board.setAttribute("style", "background-color:black");
})
whiteBG.addEventListener('click',function(){
    board.setAttribute("style", "background-color:white");
})
