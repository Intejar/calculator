function getIntegerValue(inputValue){
    const getStringValue = document.getElementById(inputValue);
    const makeInteger = parseFloat(getStringValue.innerText);
    return makeInteger;
}
document.getElementById('ac-button').addEventListener('click', function(){
    const displayNumber = document.getElementById('display-text');
    displayNumber.innerText = '0';
    
})
function showNumber(number){
    const inputNumber = document.getElementById(number);
    inputNumber.addEventListener('click', function(){
        const displayPrev = document.getElementById('display-text');
        displayPrev.innerText = inputNumber.innerText;
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