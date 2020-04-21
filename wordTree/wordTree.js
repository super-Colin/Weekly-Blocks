

let treeContainer = document.getElementById('wordTree-container');
let wordTree_disposableContainer;
let wordTree_mainWordSpan;
let wordTree_trunkWordSpan;

// let lastAdded = [ 'last added elem', 'rotation', 'transform originX', 'transform originY'];
let lastAdded = [wordTree_mainWordSpan];

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

    // Place main word in the center of disposable container
    wordTree_mainWordSpan.style.top = (treeContainer.offsetHeight / 2) - (wordTree_mainWordSpan.offsetHeight / 2) + 'px';
    wordTree_mainWordSpan.style.left = (treeContainer.offsetWidth / 2) - (wordTree_mainWordSpan.offsetWidth / 2) + 'px';

    addWords(2, secondWords);
    addWords(3, thirdWords);

}

// Create and append a new DOM element, by default the disposable container
function addWords(wordTier, elemContent, elemParent = wordTree_disposableContainer) {
    branchLength = 1;
    for(let word of elemContent){

        // Create and append a new span element after adding class and text content
        let newWordSpan = document.createElement('span');
        newWordSpan.classList.add('wordTree-words-tier' + wordTier);
        newWordSpan.innerHTML = word;   
        elemParent.appendChild(newWordSpan);

        // update lastAdded with the new element
        lastAdded[0] = newWordSpan;

        getWordSpot(newWordSpan, wordTier, branchLength);
        branchLength ++;
    }
}


function getWordSpot(elem, branchTier, branchNumber) {
    
    // Place and rotate the trunk of the tree
    if( branchTier === 2 && branchNumber === 1 ){
        
        // Center trunk on top of main word
        elem.style.left = wordTree_mainWordSpan.offsetLeft + (wordTree_mainWordSpan.offsetLeft / 2) + 'px';
        elem.style.top = (wordTree_mainWordSpan.offsetTop - elem.offsetHeight) + 'px';

        // Set transform origin and update last added
        let transformOriginX = 0;
        let transformOriginY = 100;
        elem.style.transformOrigin = transformOriginX + '% ' + transformOriginY + '%';
        lastAdded[2] = transformOriginX;
        lastAdded[3] = transformOriginY;

        // Rotate update last added
        let rotation = -90;
        elem.style.transform = 'rotate(' + rotation + 'deg)';
        lastAdded[1] = rotation;

        wordTree_trunkWordSpan = elem;

    // Start placing branches on the side of the trunk (set above)
    }else if(branchTier === 3 && branchNumber === 1) {

        // go on left side of trunk
        if(Math.random() < 0.5){
            console.log('left');
            elem.style.left = (parseFloat(wordTree_trunkWordSpan.style.left) - wordTree_trunkWordSpan.offsetHeight) - elem.offsetWidth + 'px';

            elem.style.top = ((parseFloat(wordTree_trunkWordSpan.style.top) + wordTree_trunkWordSpan.offsetHeight) - elem.offsetHeight) - (wordTree_trunkWordSpan.offsetWidth * 0.8) + 'px';


        // go on right side of trunk
        }else{
            console.log('right');
            elem.style.left = wordTree_trunkWordSpan.style.left;

            elem.style.top = ((parseFloat(wordTree_trunkWordSpan.style.top) + wordTree_trunkWordSpan.offsetHeight) - elem.offsetHeight) - (wordTree_trunkWordSpan.offsetWidth * 0.8) + 'px';


        }
    }

}


