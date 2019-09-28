/* Global Variables */
var firstNumber = "";
var secondNumber = "";
var operator = "";
var result = "";
var display = document.getElementById("display");

/* Operations */
function operation(first, second, op) {
    var total = null;
    switch (op) {
        case "+":
           total  = parseInt(first) + parseInt(second);
           return total.toString();
           break;
        case "-":
            total = parseInt(first) - parseInt(second);
            return total.toString();
            break;
        case "*":
            total = parseInt(first) * parseInt(second);
            return total.toString();
            break;
        case "/":
            total = parseInt(first) / parseInt(second);
            return total.toString();
            break;
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