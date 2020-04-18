    let treeContainer = document.getElementById('wordTree-container');
    let disposableContainer;
generate_wordTree();

function generate_wordTree(){
    let mainWord = 'Unique';
    let secondWords = ['Determined', 'Another', 'More']

    // create and append disposable container to outer container
    disposableContainer = document.createElement('div');
    disposableContainer.classList.add('wordTree-disposableContainer');
    treeContainer.appendChild(disposableContainer);

    // create and append main word to disposable container
    let mainWordSpan = document.createElement('span');
    mainWordSpan.classList.add('wordTree-words-tier1');
    mainWordSpan.appendChild(document.createTextNode(mainWord));
    disposableContainer.appendChild(mainWordSpan);

    mainWordSpan.style.top = (treeContainer.offsetHeight / 2) - (mainWordSpan.offsetHeight / 2) + 'px';
    mainWordSpan.style.left = (treeContainer.offsetWidth / 2) - (mainWordSpan.offsetWidth / 2) + 'px';

    addWords('wordTree-words-tier2', secondWords);
    
}


function addWords(elemClass, elemContent, elemParent = disposableContainer) {
    for(let word of elemContent){
        let newWordSpan = document.createElement('span');
        newWordSpan.classList.add(elemClass);
        // newWordSpan.appendChild(document.createTextNode(word));
        newWordSpan.innerHTML = word;
        elemParent.appendChild(newWordSpan);

        // findWordSpot(newWordSpan);
    }
}

// function findWordSpot() {

// }

// function getElemDimensions(elem){
//     return [elem.offsetWidth, elem.offsetHeight];
// }


