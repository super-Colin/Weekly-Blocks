

let treeContainer = document.getElementById('wordTree-container');
let wordTree_disposableContainer;
let wordTree_mainWordSpan;
let wordTree_trunkWordSpan;

// let lastAdded = [ 'last added elem', 'side of parent branch'];
let lastAdded = [wordTree_mainWordSpan];

generate_wordTree();

function generate_wordTree(){
    // Main word, the trunk sprouts from this
    let mainWord = 'Unique';
    // Trunk of the tree
    let secondWords = ['Determined'];
    // Branches from the trunk
    let thirdWords = ['Motivated', 'Another'];
    // Leaves off of the branches
    let fourthWords = ['Motivated', 'Another', 'More'];

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
    addWords(4, fourthWords);

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
    
    let randomInt = Math.random() / 2 + 0.3;
    console.log('random int is: ' + randomInt);

    // Place and rotate the trunk of the tree
    if( branchTier === 2 && branchNumber === 1 ){
        // Center trunk on top of main word
        elem.style.left = wordTree_mainWordSpan.offsetLeft + (wordTree_mainWordSpan.offsetLeft / 2) + 'px';
        elem.style.top = (wordTree_mainWordSpan.offsetTop - elem.offsetHeight) + 'px';

        // Set transform origin 
        elem.style.transformOrigin = 0 + '% ' + 100 + '%';

        // Rotate, -90 deg so that word is vertical on top of main word
        elem.style.transform = 'rotate(-90deg)';

        wordTree_trunkWordSpan = elem;

    // Start placing branches on the side of the trunk (set above)
    }else if(branchTier === 3 && branchNumber === 1) {
        console.log('first main branch')

        // go on left side of trunk
        if(Math.random() < 0.5){
            console.log('left');
            lastAdded[1] = 'left';
            elem.style.left = (parseFloat(wordTree_trunkWordSpan.style.left) - wordTree_trunkWordSpan.offsetHeight) - elem.offsetWidth + 'px';

            elem.style.top = ((parseFloat(wordTree_trunkWordSpan.style.top) + wordTree_trunkWordSpan.offsetHeight) - elem.offsetHeight) - (wordTree_trunkWordSpan.offsetWidth * randomInt) + 'px';


        // go on right side of trunk
        }else{
            console.log('right');
            lastAdded[1] = 'right';
            elem.style.left = wordTree_trunkWordSpan.style.left;

            elem.style.top = ((parseFloat(wordTree_trunkWordSpan.style.top) + wordTree_trunkWordSpan.offsetHeight) - elem.offsetHeight) - (wordTree_trunkWordSpan.offsetWidth * randomInt) + 'px';
        }


    // same as above, but make sure this branch is on the other side of the trunk
    } else if (branchTier === 3 && branchNumber === 2){
        console.log('next main branch');


        // Go on left side of trunk
        if (lastAdded[1] === 'right') {

            console.log('left');
            lastAdded[1] = 'left';
            elem.style.left = (parseFloat(wordTree_trunkWordSpan.style.left) - wordTree_trunkWordSpan.offsetHeight) - elem.offsetWidth + 'px';

            elem.style.top = ((parseFloat(wordTree_trunkWordSpan.style.top) + wordTree_trunkWordSpan.offsetHeight) - elem.offsetHeight) - (wordTree_trunkWordSpan.offsetWidth * randomInt) + 'px';


        // go on right side of trunk
        } else {
            console.log('right');
            lastAdded[1] = 'right';
            elem.style.left = wordTree_trunkWordSpan.style.left;

            elem.style.top = ((parseFloat(wordTree_trunkWordSpan.style.top) + wordTree_trunkWordSpan.offsetHeight) - elem.offsetHeight) - (wordTree_trunkWordSpan.offsetWidth * randomInt) + 'px';
        }
    }
    

}


