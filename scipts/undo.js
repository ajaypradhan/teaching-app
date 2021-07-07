const undo = document.querySelector('#undo');

undo.addEventListener('click', undoLines);
function undoLines() {
    if (linesDB.length) {
        linesDB.pop();
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
        drawLinedFromLinesDB();
    }
}

function drawLinedFromLinesDB() {
    for (let i = 0; i < linesDB.length; i++) {
        let line = linesDB[i];
        for (let i = 0; i < line.length; i++) {
            let pointObj = line[i];
            if (pointObj.type == 'md') {
                ctx.beginPath();
                ctx.moveTo(pointObj.x, pointObj.y);
            } else {
                ctx.lineTo(pointObj.x, pointObj.y);
                ctx.stroke();
            }
        }
    }
}
