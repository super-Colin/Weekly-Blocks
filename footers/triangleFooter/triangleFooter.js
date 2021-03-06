
// This is all related to finding the vertical offset
// at the point it goes off the screen


// Thanks to CSS Tricks for this one
// https://css-tricks.com/get-value-of-css-rotation-through-javascript/
function getAngle(elemId){
    var el = document.getElementById(elemId);
    var st = window.getComputedStyle(el, null);
    var tr = st.getPropertyValue("-webkit-transform") ||
        st.getPropertyValue("-moz-transform") ||
        st.getPropertyValue("-ms-transform") ||
        st.getPropertyValue("-o-transform") ||
        st.getPropertyValue("transform") ||
        "FAIL";

    // With rotate(30deg)...
    // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
    // console.log('Matrix: ' + tr);

    // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix

    var values = tr.split('(')[1].split(')')[0].split(',');
    var a = values[0];
    var b = values[1];
    var c = values[2];
    var d = values[3];

    var scale = Math.sqrt(a * a + b * b);

    // console.log('Scale: ' + scale);

    // arc sin, convert from radians to degrees, round
    var sin = b / scale;
    // next line works for 30deg but not 130deg (returns 50);
    // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
    var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

    // console.log('Rotate: ' + angle + 'deg');
    return angle;
}


function getWidth(elemId){
    return document.getElementById(elemId).offsetWidth;
}


function getOpposite( adjacent, degreeAngle){ 
    let radians = degreeAngle * Math.PI / 180;
    let slopePercent = Math.tan(radians);
    console.log(adjacent, slopePercent)
    return adjacent * slopePercent;
}

function setTriangleFooterPadding(footerElemId, angleElemId) {
    let footer = document.getElementById(footerElemId);
    let footerWidth = getWidth(footerElemId);

    let angle = getAngle(angleElemId);
    console.log(angle);

    let offset = getOpposite(footerWidth, angle)

    footer.style.setProperty('--leftTriangle-topOffset', offset + 'px');
}






// The Meat


// To wait a small moment for the resizing to be done before running the actual function
// https://alvarotrigo.com/blog/firing-resize-event-only-once-when-resizing-is-finished/
let idForDoneResizingTimeout;


function leftAngleResizeEvent(){
    // setTriangleFooterPadding('triangleFooter-container', 'triangleFooter-leftTriangle-angledBlock');

    clearTimeout(idForDoneResizingTimeout);
    idForDoneResizingTimeout = setTimeout(doneResizing, 700);
}
function doneResizing(){
    setTriangleFooterPadding('triangleFooter-container', 'triangleFooter-leftTriangle-angledBlock');
}

// Call for the first time and watch for resizes
// leftAngleResizeEvent();
doneResizing();
window.addEventListener('resize', leftAngleResizeEvent);









// Expandable 

function toggleCenterExpandable(){
    let centerExpandable = document.getElementById('triangleFooter-centerExpandable-container');
    let topShouldBe = Math.floor((centerExpandable.offsetHeight * -1) * 0.87) + 'px';

    if (centerExpandable.classList.contains('triangleFooter-centerExpandable-active')) {

        centerExpandable.style.top = null;

        document.getElementById('triangleFooter-centerExpandable-topFlair').classList.toggle('topFlairExpanded');
        centerExpandable.classList.toggle('triangleFooter-centerExpandable-active');

        console.log('if trigger');

    } else{

        document.getElementById('triangleFooter-centerExpandable-topFlair').classList.toggle('topFlairExpanded');
        
        centerExpandable.style.top = topShouldBe;
        centerExpandable.classList.toggle('triangleFooter-centerExpandable-active');
    }

}

// listen for clicks on the "Contact" word as well as the arrow above it
document.getElementById('triangleFooter-centerExpandable-title').addEventListener('click', toggleCenterExpandable);
document.getElementById('triangleFooter-centerExpandable-topFlair').addEventListener('click', toggleCenterExpandable);

