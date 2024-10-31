const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const Delete = document.querySelector(".Delete");
const equal = document.querySelector(".equal");
const previousResult = document.querySelector(".previous-result");
const currentResult = document.querySelector(".current-result");

let currentOperation = "";
let previousOperation = "";
let operation = undefined;


function calculate() {
    let result; 
    if (!previousOperation || !currentOperation) {
        return;
    }
    const previous = parseFloat(previousOperation);
    const current = parseFloat(currentOperation);
    if (isNaN(previous) || isNaN(current)) {
        return;
    }
    switch (operation) {
        case "+":
            result = previous + current;
            break;
        case "-":
            result = previous - current;
            break;
        case "×":
            result = previous * current;
            break;
        case "÷":
            result = previous / current;
            break;
        case "^":
            result = Math.pow(previous, current);
            break;
        case "%":
            result = (previous / 100) * current;
            break;
        case "√":
            result = Math.pow(previous, 1 / current);
            break;
        case "log":
            result = Math.log(previous) / Math.log(current);
            break;
        default:
            return;
    }
    currentOperation = result;
    operation = undefined;
    previousOperation = "";
}

function pickOperation(operator) {
    if (currentOperation === "") {
        return;
    }
    if (previousOperation !== "") {
        calculate();
    }
    operation = operator; 
    previousOperation = currentOperation;
    currentOperation = "";
}

function updateResults() {
    currentResult.textContent = currentOperation;
    if (operation != null) {
        previousResult.textContent = previousOperation + " " + operation;
    } else {
        previousResult.textContent = "";
    }
}

function addNumber(number) {
    if (number === "•") {
        if (currentOperation.includes(".")) {
            return;
        }
        number = ".";
    }
    currentOperation = currentOperation.toString() + number.toString();
}

function deleteNumber() {
    currentOperation = currentOperation.toString().slice(0, -1);
}

numbers.forEach((number) => {
    number.addEventListener("click", function(event) {
        addNumber(number.textContent);
        updateResults();
    });
});

Delete.addEventListener("click", function(event) {
    deleteNumber();
    updateResults();
});

operators.forEach((operator) => {
    operator.addEventListener("click", function(event) {
        pickOperation(operator.textContent);
        updateResults();
    });
});

equal.addEventListener("click", function(event) {
    calculate();
    updateResults();
});

clear.addEventListener("click", function(event) {
    clearFunction();
});

function clearFunction(){
    currentOperation = "";
    operation = undefined;
    previousOperation = "";
    updateResults();
}

document.addEventListener("keydown", function(event){
    const isNumber = isFinite(event.key) && event.key !== ' ';

    if(isNumber == true){
        addNumber(event.key)
        updateResults();
        // code below checks for operators
    }else if(event.key == "+" || event.key == "-" || event.key == "×" ||   event.key == "^" || event.key == "%"){
        pickOperation(event.key);
        updateResults();
    }else if(event.key == "/"){
        pickOperation("÷");
        updateResults();
    }else if(event.key == "Enter"){
        if(currentResult == ""){
            return;
        }else {
            calculate();
            updateResults();
        }        
    }else if(event.key == "Delete"){
        clearFunction();
        updateResults();
    }else if(event.key == "Backspace"){
        deleteNumber();
        updateResults();
    }
});


