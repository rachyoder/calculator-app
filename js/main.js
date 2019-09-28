/* Global Variables */
var app = document.getElementById("app");
var display = document.createElement("div");
var btnContent = [
    "Clear", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

/* Initial Page Setup */
function init() {
    app.setAttribute("class", "container");
    for (var i = 0; i < 3; i++) {
        var row = document.createElement("div");
        var col = document.createElement("div");
        row.setAttribute("class", "row mx-4");
        if (i == 0) {
            col.setAttribute("class", "col-12 mt-3");
            var head = document.createElement("h2");
            var sub = document.createElement("p");
            head.setAttribute("class", "mx-auto turrentFont text-center display-5");
            head.innerHTML = "CALCULATRON"
            sub.setAttribute("class", "text-muted mx-auto text-center turrentFont display-5");
            sub.innerHTML = "I crunch numbers... and skulls"
            col.appendChild(head);
            col.appendChild(sub);
            row.appendChild(col);
        } else if (i == 1) {
            /* Display Setup */
            display.setAttribute("class", "col-12 border text-white bg-dark startFont py-2 my-0 text-right overflow-auto rounded");
            //display.setAttribute("class", "startFont py-2 my-0 float-right");
            display.setAttribute("id","display");
            display.innerHTML = "0";
            row.appendChild(display);
            //row.appendChild(col);
        } else if (i == 2) {
            /* Button Setup */
            var calc = document.createElement("div");
            calc.setAttribute("class", "container");
            for (var j = 0; j < btnContent.length; j++) {
                var button = document.createElement("div");
                if (j == 0 || j == 1 || j == 14) {
                    button.setAttribute("class", "col-6 border button rounded m-0 py-3 px-3 text-center text-white bg-secondary");
                } else {
                    button.setAttribute("class", "col-3 border button rounded m-0 py-3 py-3 text-center text-white bg-secondary");
                }
                button.innerHTML = btnContent[j];
                button.setAttribute("id", "btn_" + btnContent[j]);
                var buttonId = button.getAttribute("id");
                button.addEventListener("click", btnClick);
                row.appendChild(button);
            }

        }
        app.appendChild(row);
    }
}
