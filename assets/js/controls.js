const results = document.getElementById('results');

var number1 = null;
var operation = null;
var number2 = null;

function clearResults() {
    results.textContent = "";
    number1 = null;
    operation = null;
    number2 = null;
}

function addNumber(value) {
    results.textContent += value.textContent;
}

function operator(value) {
    number1 = parseFloat(results.textContent);
    operation = value;
    console.log(operation);
    results.textContent = "";
}

function calculate() {
    number2 = parseFloat(results.textContent);

    let final;
    switch (operation) {
        case "+":
            final = number1 + number2;
            break;
        case "-":
            final = number1 - number2;
            break;
        case "X":
            final = number1 * number2;
            break;
        case "/":
            final = number1 / number2;
            break;
        default:
            final = "Error";
            break;
    }

    results.textContent = final;
}