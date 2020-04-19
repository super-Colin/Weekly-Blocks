    let treeContainer = document.getElementById('wordTree-container');
    let wordTree_disposableContainer;
    let wordTree_mainWordSpan;

    // let lastAdded = [ 'last added elem', 'rotation', 'transform originX', 'transform originY'];
    let lastAdded = [wordTree_mainWordSpan];
    console.log(lastAdded);

generate_wordTree();

function generate_wordTree(){
    let mainWord = 'Unique';
    let secondWords = ['Determined'];
    let thirdWords = ['Motivated', 'Another', 'More'];

    // create and append disposable container to outer container
    wordTree_disposableContainer = document.createElement('div');
    wordTree_disposableContainer.classList.add('wordTree-wordTree_disposableContainer');
    treeContainer.appendChild(wordTree_disposableContainer);

    // create and append main word to disposable container
    wordTree_mainWordSpan = document.createElement('span');
    wordTree_mainWordSpan.classList.add('wordTree-words-tier1');
    wordTree_mainWordSpan.appendChild(document.createTextNode(mainWord));
    wordTree_disposableContainer.appendChild(wordTree_mainWordSpan);

    wordTree_mainWordSpan.style.top = (treeContainer.offsetHeight / 2) - (wordTree_mainWordSpan.offsetHeight / 2) + 'px';
    wordTree_mainWordSpan.style.left = (treeContainer.offsetWidth / 2) - (wordTree_mainWordSpan.offsetWidth / 2) + 'px';

    addWords(2, secondWords);
    addWords(3, thirdWords);

}


function addWords(wordTier, elemContent, elemParent = wordTree_disposableContainer) {
    branchLength = 1;
    for(let word of elemContent){
        let newWordSpan = document.createElement('span');
        newWordSpan.classList.add('wordTree-words-tier' + wordTier);
        newWordSpan.innerHTML = word;
        elemParent.appendChild(newWordSpan);

        getWordSpot(newWordSpan, wordTier, branchLength);
        branchLength ++;
    }
}

// function addWord(elemClass, elemContent, elemParent = wordTree_disposableContainer){

// }

function getWordSpot(elem, branchTier, branchNumber) {
    if( branchTier === 2 && branchNumber === 1 ){
        console.log(elem.offsetLeft);
        elem.style.left = wordTree_mainWordSpan.offsetLeft + (wordTree_mainWordSpan.offsetLeft / 2) + 'px';
        elem.style.top = (wordTree_mainWordSpan.offsetTop - elem.offsetHeight) + 'px';
        let rotation = -90;
        elem.style.transform = 'rotate(' + rotation + 'deg)';
        lastAdded[1] = rotation;
        let transformOriginX = 0;
        let transformOriginY = 100;
        elem.style.transformOrigin = transformOriginX + '% ' + transformOriginY + '%';
        lastAdded
        // elem.style.transformOrigin = ;

        console.log(elem.offsetLeft);

        lastAdded[0] = elem;
    } else {
        console.log('else triggered');
    }

}


