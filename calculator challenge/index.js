let kutr1 = 10
let kutr2 = 5
let dmr = document.getElementById("sum-el");

document.getElementById("kutr1-el").textContent = kutr1
document.getElementById("kutr2-el").textContent = kutr2


function add() {
    result = kutr1 + kutr2
    dmr.textContent = "Sum: " + result
}

function subtract() {
    result = kutr1 - kutr2;
    dmr.textContent = "Sum: " + result;
}

function divide() {
    result = kutr1 / kutr2;
    dmr.textContent = "Sum: " + result;
}

function multiply() {
    result = kutr1 * kutr2;
    dmr.textContent = "Sum: " + result;
}