
const scrollProgressBar = document.getElementById('scroll-progress-bar');
window.onscroll = scrollBarUpdate;

function scrollBarUpdate(){
    const spot = window.pageYOffset;
    const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
    // const percentScrolled = Math.round(((spot / height) * 100));
    const percentScrolled = ((spot / height) * 100);
    scrollProgressBar.style.width = (percentScrolled + "%");
}


// None of these worked
// window.addEventListener('scroll', scrollBarUpdate(), {passive: true});
// document.body.addEventListener('scroll', scrollBarUpdate(), {passive: true});
// document.documentElement.addEventListener('scroll', scrollBarUpdate(), {passive: true});
// None of these worked