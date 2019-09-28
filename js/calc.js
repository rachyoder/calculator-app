/* Global Variables */
var firstNumber = "";
var secondNumber = "";
var operator = "";
var result = "";
var display = document.getElementById("display");


/* Button Clicking */
async function btnClick(e) {
    //console.log(e.target.id);
    var btnString = e.target.id.split("_");
    var btnPressed = btnString[1];
    console.log(btnPressed);
    switch (btnPressed) {
        case "+":
            operator = btnPressed;
            display.innerHTML = btnPressed;
            break;
        case "-":
            operator = btnPressed;
            display.innerHTML = btnPressed;
            break;
        case "*":
            operator = btnPressed;
            display.innerHTML = btnPressed;
            break;
        case "/":
            operator = btnPressed;
            display.innerHTML = btnPressed;
            break;
        case "=":
            break;
        case "Clear":
            firstNumber = "";
            secondNumber = "";
            operator = "";
            result = "";
            display.innerHTML = "0";
            break;
        case ".":
            //if (operator != "")
        default: 
            if (operator != "") {
                secondNumber += btnPressed;
                display.innerHTML = secondNumber;
            } else {
                firstNumber += btnPressed;
                display.innerHTML = firstNumber;
            }
    }
    console.log("firstNumber: ",firstNumber);
    console.log("secondNumber: ",secondNumber);
}