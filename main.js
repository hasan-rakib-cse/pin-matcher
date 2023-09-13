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