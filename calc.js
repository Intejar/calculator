
document.getElementById('ac-button').addEventListener('click', function () {
    const displayNumber = document.getElementById('display-text');
    displayNumber.innerText = ' ';

})
function showNumber(number) {
    const displayPrev = document.getElementById('display-text');
    const inputNumber = document.getElementById(number);
    inputNumber.addEventListener('click', function () {
        displayPrev.innerText += inputNumber.innerText;
    })
}
const isEqual = document.getElementById('equal-btn');
isEqual.addEventListener('click',function(){
    const currentDisplay = document.getElementById('display-text');
    const showDisplay = eval(currentDisplay.innerText);
    currentDisplay.innerText = showDisplay;
})

const backCut = document.getElementById('back-btn');
backCut.addEventListener('click',function(){
    const showNumberDisplay = document.getElementById('display-text');
    const showCutDisplay = showNumberDisplay.innerText.slice(0,-1);
    showNumberDisplay.innerText = showCutDisplay;
})

showNumber('number-0');
showNumber('number-1');
showNumber('number-2');
showNumber('number-3');
showNumber('number-4');
showNumber('number-5');
showNumber('number-6');
showNumber('number-7');
showNumber('number-8');
showNumber('number-9');
showNumber('plus-btn');
showNumber('minus-btn');
showNumber('division-btn');
showNumber('multi-btn');
showNumber('percent-btn');
showNumber('dot-btn');

