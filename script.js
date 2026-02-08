// hello world
let input = document.getElementById("in");
let output = document.getElementById("out");
let btn = document.querySelector(".operatorBtn");
let clear = document.getElementById("clear");
let deleteBtn = document.getElementById("delete");
let equal = document.getElementById("equal");
let result = 0;

// craft
input.textContent = "";
output.textContent = "";

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){ // divide by 0
    if (b === 0){
        return "divided by 0";
    }
    return a / b;
}

btn.addEventListener("click", e => {
    if (
    e.target.classList.contains("btn") 
    && e.target.id !== "clear"
    && e.target.id !== "delete"
    && e.target.id !== "equal"){
        input.textContent += e.target.textContent;
    }
});

clear.addEventListener("click", () => {
    if (input.textContent === "" && output.textContent === ""){
        return;
    }
    else{
        input.textContent = "";
        output.textContent = "";
    }
});

deleteBtn.addEventListener("mousedown", e => {
    input.textContent = input.textContent.slice(0, -1);
});

function operator(string){
    let expression = string.split(" ");
    let term1 = Number(expression[0]);
    let term2 = Number(expression[expression.length - 1]);
    let ope = expression[expression.length - 2];
    let res;
    if (ope === "+"){
        res = add(term1, term2);
    }
    else if (ope === "-"){
        res = subtract(term1, term2);
    }
    else if (ope === "*"){
        res = multiply(term1, term2);
    }
    else if (ope === "/"){
        res = divide(term1, term2);
    }
    res = Math.round(res * 100000) / 100000;
    return res;
}

equal.addEventListener("click", e => {
    output.textContent = operator(input.textContent);
});