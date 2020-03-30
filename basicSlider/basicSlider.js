

// let currentSlide = 1;
// toThisSlide(currentSlide);
toThisSlide(1, 'init');


function toPrevSlide(){
    console.log('prev slide triggered');
    toThisSlide(-1, 'prev');
}

function toNextSlide(){
    console.log('next slide triggered');
    toThisSlide(1, 'next');
}


function toThisSlide(slideNumber, move = 'this' ) {

    // Figure out the active slide
    let slides = document.getElementsByClassName('basicSlider-slide');
    
    let activeSlide = 0;
    for (let ele of slides){
        activeSlide ++;
        console.log(activeSlide);
        if( ele.classList.contains('basicSlider-activeSlide')){
            console.log('active slide is: ' + activeSlide);
            break;
        }
    }

    switch (move) {
        case 'init':
            slides[0].classList.add('basicSlider-activeSlide');
            activeSlide = 1;
        break;

        case 'prev':
            // remove classes from currently active slide
            slides[activeSlide - 1].classList.remove('basicSlider-viewedSlide');
            slides[activeSlide - 1].classList.remove('basicSlider-activeSlide');

            // remove viewed and add active to slide behind the currently active slide
            // loop around from first slide
            if(activeSlide === 1){
                slides[slides.length - 1].classList.remove('basicSlider-viewedSlide');
                slides[slides.length - 1].classList.add('basicSlider-activeSlide');
                activeSlide = slides.length;
            }else{
                slides[activeSlide - 2].classList.remove('basicSlider-viewedSlide');
                slides[activeSlide - 2].classList.add('basicSlider-activeSlide');
                activeSlide = activeSlide - 1;
            }

            break;

        
        case 'next':

            if (activeSlide === slides.length) {
                // roll back to beggining
                for (let ele of slides) {
                    // if (ele.classList.contains('basicSlider-viewedSlide')) {
                        ele.classList.remove('basicSlider-viewedSlide');
                    // }
                }
                slides[activeSlide - 1].classList.remove('basicSlider-viewedSlide');
                slides[activeSlide - 1].classList.remove('basicSlider-activeSlide');
                slides[0].classList.add('basicSlider-activeSlide');

                activeSlide = 1;
            } else {

                slides[activeSlide - 1].classList.replace('basicSlider-activeSlide', 'basicSlider-viewedSlide');
                slides[activeSlide].classList.add('basicSlider-activeSlide');

                activeSlide ++;
            }

            break;


        case 'this':
            console.log('nothing');
            if(activeSlide > slideNumber){
                let i = activeSlide;
                while(i > slideNumber){
                    if(i === slideNumber){

                    }
                    slides[i].classList.add('basicSlider-activeSlide');
                }
            }
            // remove all classes 
            for (let ele of slides) {
                if (ele.classList.contains('basicSlider-activeSlide')) {
                    console.log('active slide is: ' + activeSlide);
                    break;
                }
                activeSlide++;
            }
        break;

    }

    updateSlideIndex(activeSlide, slides.length);

}

function updateSlideIndex(currentSlideNumber, slideMaxIndex) {
    let slideIndex = document.getElementsByClassName('basicSlider-slide-number');
    slideIndex[0].innerHTML = (currentSlideNumber + ' / ' + slideMaxIndex);
}

