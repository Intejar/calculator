function getIntegerValue(inputValue) {
    const getStringValue = document.getElementById(inputValue);
    const makeInteger = parseFloat(getStringValue.innerText);
    return makeInteger;
}
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
