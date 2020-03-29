

// let currentSlide = 1;
// toThisSlide(currentSlide);
toThisSlide(1);


function toPrevSlide(){
    console.log('prev slide triggered');
    toThisSlide(-1, 'prev');
}

function toNextSlide(){
    console.log('next slide triggered');
    toThisSlide(1, 'next');
}

function toThisSlide(slideNumber, move = 'none' ) {

    // Figure out the active slide
    let slides = document.getElementsByClassName('basicSlider-slide');
    
    let activeSlide = 1;
    for (let ele of slides){
        if( ele.classList.contains('basicSlider-activeSlide')){
            console.log('active slide is: ' + activeSlide);
            break;
        }
        activeSlide ++;
    }

    switch (move) {
        case 'prev':
            slides[activeSlide - 1].classList.remove('basicSlider-viewedSlide');
            slides[activeSlide - 1].classList.remove('basicSlider-activeSlide');
            slides[activeSlide - 2].classList.remove('basicSlider-viewedSlide');
            slides[activeSlide - 2].classList.add('basicSlider-activeSlide');

            break;
        
        case 'next':
            slides[activeSlide].classList.add('basicSlider-activeSlide');
            slides[activeSlide - 1].classList.replace('basicSlider-activeSlide', 'basicSlider-viewedSlide');
            break;

        case 'none':

    }


}

