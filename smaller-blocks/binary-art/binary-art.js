
// const binaryArtP = document.getElementById('binary-art-p');
// const binaryArtP2 = document.getElementById('binary-art-p2');
// const binaryArtP3 = document.getElementById('binary-art-p3');

const binaryArtDiv = document.getElementById('binary-art-wrapper');
const lineLength = 200

let i=1;
while (i < 50) {
    let newP = makeBinaryArtP(i);
    binaryArtDiv.appendChild(newP);
    let newLineP = document.getElementById('binary-art-p' + i);
    console.log(newLineP);
    makeBinaryArt(newLineP, i);
    i++;
}

function makeBinaryArtP(inputNum){
    let newP = document.createElement('p');
    newP.id = 'binary-art-p' + inputNum;
    return newP;
}

function makeBinaryArt(outputElement, onLine){
    outputElement.innerHTML = '';
    let digitsAdded = 0;
    let line = '';

    // create a string of binary digits
    while( digitsAdded < lineLength){
        let toInsert = Math.round(Math.random());
        line = line + toInsert;
        digitsAdded ++;
    }
    // output the string of binary digits to html
    outputElement.innerHTML = line;

    let nextIndex = drawLine(line, 0,onLine) + 1;
    console.log('next index is ' + nextIndex);
    if (nextIndex <= lineLength && !nextIndex == -1){
        console.log('while loop should trigger');
    }

    let i = 0;
    while(i < 50){
        if (nextIndex >= lineLength || nextIndex === lineLength - 1) {
            console.log('while loop was broken at: ' + i);
            break;
        }
        nextIndex = drawLine(line, nextIndex, onLine) + 1;
        console.log('next index is ' + nextIndex);
        i++;

    }

}


function drawLine(binaryString, startingIndex, onLine) {
    // make line into array
    let binArray = Array.from(binaryString);
    binArray = binArray.slice(startingIndex);

    // get index of the first 0
    let lineStart = binArray.findIndex((ele) => ele === '0');

    // get the next 0
    binArray = binArray.slice(lineStart +1);
    let lineEnd = binArray.findIndex((ele) => ele === '0');
    lineEnd = lineEnd + lineStart + 1;

    if(lineEnd > lineLength || lineEnd === lineLength -1){
        lineEnd = lineLength;
    }

    // create a line between the two
    let lineToCreate;

    if (lineEnd === -1) {
        lineEnd = lineLength;
        lineToCreate = createLine( (lineStart + startingIndex), (lineEnd - 1), onLine);
    } else{
        lineToCreate = createLine( (lineStart + startingIndex), (lineEnd - 1) + startingIndex, onLine);
    }
    binaryArtDiv.appendChild(lineToCreate);

    return lineEnd + startingIndex;
}   


function createLine(startIndex, endIndex, onLine){
    let newLine = document.createElement('span');
    newLine.classList.add('line');
    if(endIndex >= lineLength){
        endIndex = lineLength -1;
    }

    let width = ( ( (endIndex - startIndex) + 1) * 11);
    if(width === 0){
        width = 11;
    }
    
    let top =0;
    if(onLine === 1){

        top =  10;
    } else{
        top = onLine - 1;
        top = top * 23;
        top = top + 10;
    }

    newLine.style.cssText = 'left: '+ ((startIndex * 11) + 5) + 'px; top: '+ top  +'px; width: ' + width + 'px;';

    return newLine;
}

