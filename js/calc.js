/* Global Variables */
var firstNumber = "0";
var secondNumber = "";
var operator = "";
var result = "";
var display = document.getElementById("display");

/* Operations */
function operation(first, second, op) {
    var total = null;
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
    //console.log(e.target.id);
    var btnString = e.target.id.split("_");
    var btnPressed = btnString[1];
    console.log(btnPressed);
    switch (btnPressed) {
        case "+":
        case "-":
        case "*":
        case "/":
            operator = btnPressed;
            display.innerHTML = btnPressed;
            break;
        case "=":
            result = operation(firstNumber, secondNumber, operator);
            secondNumber = "";
            firstNumber = result;
            display.innerHTML = result;
            break;
        case "Clear":
            firstNumber = "";
            secondNumber = "";
            operator = "";
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
            if (firstNumber.length >= 10 || secondNumber.length >= 10) {
                break;
            } else {
                if (operator != "") {
                    secondNumber += btnPressed;
                    display.innerHTML = secondNumber;
                } else {
                    firstNumber += btnPressed;
                    display.innerHTML = firstNumber;
                }
            }
    }
    console.log("firstNumber: ", firstNumber);
    console.log("secondNumber: ", secondNumber);
}