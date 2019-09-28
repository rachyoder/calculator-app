/* Global Variables */
var app = document.getElementById("app");
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
            sub.innerHTML = "I crunch numbers... and souls"
            col.appendChild(head);
            col.appendChild(sub);
            row.appendChild(col);
        } else if (i == 1) {
            col.setAttribute("class", "col-12 border text-white bg-dark rounded");
            var display = document.createElement("h3");
            display.setAttribute("class", "startFont py-2 my-0 float-right")
            display.innerHTML = 0;
            col.appendChild(display);
            row.appendChild(col);
        } else if (i == 2) {
            var calc = document.createElement("div");
            calc.setAttribute("class", "container");
            for (var j = 0; j < btnContent.length; j++) {
                var button = document.createElement("div");
                if (j == 0 || j == 1 || j == 14) {
                    button.setAttribute("class", "col-6 border rounded m-0 py-3 px-3 text-center text-white bg-secondary");
                } else {
                    button.setAttribute("class", "col-3 border rounded m-0 py-3 py-3 text-center text-white bg-secondary");
                }
                button.innerHTML = btnContent[j];
                button.setAttribute("id", "btn-" + btnContent[j]);
                row.appendChild(button);
            }

        }
        app.appendChild(row);
    }
}
