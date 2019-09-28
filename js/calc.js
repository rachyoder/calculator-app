/* Global Variables */
var firstNumber = "";
var secondNumber = "";
var operator = "";
var previousOperator = "";
var previousSecondNum = "";
var display = document.getElementById("display");

/* Operations */
function operation(first, second, op) {
    var total = null;
    if (first == "") {
        first = "0";
    }
    switch (op) {
        case "+":
            total = parseFloat(first) + parseFloat(second);
            break;
        case "-":
            total = parseFloat(first) - parseFloat(second);
            break;
        case "*":
            total = parseFloat(first) * parseFloat(second);
            break;
        case "/":
            if (secondNumber == 0) {
                return "undefined";
            } else {
                total = parseFloat(first) / parseFloat(second);
                break;
            }
    }
    if (isNaN(total) == true) {
        return "undefined";
    } else {
        return total.toString();
    }
}

/* Button Clicking */
async function btnClick(e) {
    var btnString = e.target.id.split("_");
    var btnPressed = btnString[1];
    console.log(btnPressed);
    switch (btnPressed) {
        case "+":
        case "-":
        case "*":
        case "/":
            if (secondNumber != "") {
                firstNumber = operation(firstNumber, secondNumber, operator)
                secondNumber = "";
                display.innerHTML = firstNumber;
            }
            operator = btnPressed;
            break;
        case "=":
            if (previousOperator != "") {
                firstNumber = operation(firstNumber, previousSecondNum, previousOperator);
                display.innerHTML = firstNumber;
                break;
            } else {
                firstNumber = operation(firstNumber, secondNumber, operator);
                previousOperator = operator;
                previousSecondNum = secondNumber;
                secondNumber = "";
                console.log("previousOp: ", operator);
                console.log("previousNum: ", previousSecondNum);
                display.innerHTML = firstNumber;
                break;
            }
            case "Clear":
            firstNumber = "";
            secondNumber = "";
            operator = "";
            previousOperator = "";
            previousSecondNum = "";
            result = "";
            display.innerHTML = "0";
            break;
        case ".":
            if (operator != "") {
                if (secondNumber.includes('.') == true) {
                    break;
                } else {
                    secondNumber += btnPressed;
                    display.innerHTML = secondNumber;
                    break;
                }
            } else {
                if (firstNumber.includes('.') == true) {
                    break;
                } else {
                    firstNumber += btnPressed;
                    display.innerHTML = firstNumber;
                    break;
                }
            }
        default:
            if (operator != "") {
                if (secondNumber.length >= 10) {
                    break;
                } else {
                    secondNumber += btnPressed;
                    display.innerHTML = secondNumber;
                }
            } else {
                if (firstNumber.length >= 10) {
                    break;
                } else {
                    firstNumber += btnPressed;
                    display.innerHTML = firstNumber;
                }
            }
    }
    console.log("firstNumber: ", firstNumber);
    console.log("secondNumber: ", secondNumber);
}