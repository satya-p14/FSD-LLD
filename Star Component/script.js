// WRITE SOLUTION HERE

const StarContainer = document.getElementById('star-container');
const Star = document.querySelectorAll('.star');
const Display = document.getElementById('count');
let flag = false;

StarContainer.addEventListener('mouseover', function (event) {
    let val = Number(event.target.dataset.index)
    fillstar(val);
})

StarContainer.addEventListener('mouseout', function () {
    if (!flag) {
        Star.forEach(function (ele) {
            ele.classList.remove('star-filled')
        })
    }
})


StarContainer.addEventListener('click', function (event) {
    let val = Number(event.target.dataset.index)
    if (val) {
        flag = true;
        fillstar(val)
    }
    Display.textContent = val;
})


function fillstar(index) {
    for (let i = 0; i < Star.length; i++) {
        if (i < index) {
            Star[i].classList.add('star-filled')
        } else {
            Star[i].classList.remove('star-filled')
        }
    }
}
