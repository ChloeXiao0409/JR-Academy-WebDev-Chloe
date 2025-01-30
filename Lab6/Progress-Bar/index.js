const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        //keeping the next btn disabled
        currentActive = 4;
    }
    // console.log('next', currentActive);
    updateStyle();
});

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        //keeping the prev btn disabled
        currentActive = 1;
    }
    // console.log('prev', currentActive);
    updateStyle();
});

function updateStyle() {

    //1. Circles color need to be updated
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    //2. Progress bar needs to be updated
    progress.style.width = (currentActive - 1) / (circles.length - 1) * 100 + '%';

    //3. Enable/Disable the buttons
    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}