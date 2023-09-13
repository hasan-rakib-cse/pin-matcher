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

// matching function
let count = 3;
document.getElementById('verifyPin').addEventListener('click', function() {

    // Generate Pin input screen value
    let randomInputPin = document.getElementById('pinDisplay');
    randomPin = randomInputPin.value;

    // calculator screen value
    let calcInputPin = document.getElementById('calculatorDisplay');
    calculatorPin = calcInputPin.value;

    // for showing success or failure message
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    count--;
    var submitBtn = document.getElementById('verifyPin');

    // for 3 try
    if(count == 0) {
        submitBtn.setAttribute("disabled", "");
    } else {
        // matching condition
        if(randomPin === calculatorPin) {
            pinSuccessMessage.style.display = 'block';
            pinFailureMessage.style.display = 'none';
        } else {
            pinFailureMessage.style.display = 'block';
            pinSuccessMessage.style.display = 'none';
        }
    }
})

