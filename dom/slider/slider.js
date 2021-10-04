const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');

const slider = document.querySelector('.slider__list');
const stylesList = window.getComputedStyle(slider);

const items = document.querySelectorAll('.slider__item')
const stylesItem = window.getComputedStyle(items[0]);


const step = parseInt(stylesItem.width) + 3;
const minRight = 0;
const maxRight = step * (items.length - 3);
let currentRight = parseInt(stylesList.right);

console.log('step: '+step)
console.log('maxRight: '+maxRight)

arrowRight.addEventListener('click', e => {
    e.preventDefault();
    if (currentRight < maxRight) {
        currentRight += step;
        slider.style.right = `${currentRight}px`
        console.log(slider.style.right)
    };
})
arrowLeft.addEventListener('click', e => {
    e.preventDefault();
    if (currentRight > minRight) {
        currentRight -= step;
        slider.style.right = `${currentRight}px`
        console.log(slider.style.right)
    };
})