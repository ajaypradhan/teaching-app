const redo = document.querySelector('#redo');
redo.addEventListener('click', redoLine);


function redoLine() {
    if (redoLinesDB.length) {
        let currentLineWidth = ctx.lineWidth;
        let currentStrokeStyle = ctx.strokeStyle;

        let redoLine = redoLinesDB.pop();
        for (let i = 0; i < redoLine.length; i++) {
            let pointObject = redoLine[i];
            if (pointObject.type == 'md') {
                ctx.lineWidth = pointObject.lineWidth;
                ctx.strokeStyle = pointObject.strokeStyle;
                ctx.beginPath();
                ctx.moveTo(pointObject.x, pointObject.y);
            } else {
                ctx.lineTo(pointObject.x, pointObject.y);
                ctx.stroke();
            }
        }
        linesDB.push(redoLine);

        ctx.lineWidth = currentLineWidth;
        ctx.strokeStyle = currentStrokeStyle;
    }
}
