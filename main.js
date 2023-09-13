// random number generate
function generatePin() {
    let number = Math.floor(Math.random() * 9000 + 1000);
    return number;
}

// Put generated random number in input and display
var rand = document.getElementById('randomButton');
rand.addEventListener('click', function randomGenerator() {
    
    let randomNumber = generatePin();
    let pinInput = document.getElementById('pinDisplay');
    pinInput.value = randomNumber;
});

// calculator functionality
var calculatorInput = document.getElementById('calculatorDisplay');
let buttons = document.querySelectorAll('.button');

let string = "";
let buttonArray = Array.from(buttons);

buttonArray.forEach(button => {
    button.addEventListener('click', function(e) {
        if(e.target.innerHTML == '&lt;') {
            string = string.toString().slice(0, -1);
            calculatorInput.value = string;
        }
        else if(e.target.innerHTML == 'C') {
            string = '';
            calculatorInput.value = string;
        }
        else {
            string += e.target.innerHTML;
            calculatorInput.value = string;
        }
    })
});