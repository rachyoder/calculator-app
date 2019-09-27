/* Global Variables */
var app = document.getElementById("app");

/* Initial Page Setup */
function init() {
    app.setAttribute("class", "container");
    for (var i = 0; i < 3; i++) {
        var row = document.createElement("div");
        var col = document.createElement("div");
        row.setAttribute("class", "row");
        if (i == 0) {
            col.setAttribute("class", "col-12");
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
            for (var j = 0; j < 17; j++) {
                console.log(j);
                var button = document.createElement("div");
                switch (j) {
                    case 0:
                        button.innerHTML = "Clear";
                        break;
                    case 1:
                        button.innerHTML = "/";
                        break;
                    case 5:
                        button.innerHTML = "*";
                        break;
                    case 9:
                        button.innerHTML = "-";
                        break;
                    case 13:
                        button.innerHTML = "+";
                        break;
                    case 14:
                        button.innerHTML = "0"
                        break;
                    case 15:
                        button.innerHTML = ".";
                        break;
                    case 16:
                        button.innerHTML = "=";
                        break;
                    default:
                        button.innerHTML = "X";

                }
                if (j == 0 || j == 1 || j == 14) {
                    button.setAttribute("class", "col-6 border m-0 py-3 px-3 text-white bg-secondary");
                    button.setAttribute("id", j);
                } else {
                    button.setAttribute("class", "col-3 border m-0 py-3 py-3 text-white bg-secondary");
                    button.setAttribute("id", j);
                    // button.innerHTML = "x";
                }
                row.appendChild(button);
                //row.appendChild(calc);
            }

        }
        app.appendChild(row);
    }
}
