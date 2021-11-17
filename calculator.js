let currentInput = null;
let previousInput = null;
let operator = null;

function appendTotal(num){
    if(currentInput){
        currentInput += "" + num;
        document.getElementById("total").innerHTML = currentInput;
    }else{
        currentInput = num;
        document.getElementById("total").innerHTML = currentInput;
    }
}
function multiply(){
    if(operator != null){
        equals();
    }
    operator = "x";
    previousInput = currentInput;
    currentInput = null;
}
function subtract(){
    if(operator != null){
        equals();
    }
    operator = "-";
    previousInput = currentInput;
    currentInput = null;
}
function add(){
    if(operator != null){
        equals();
    }
    operator = "+";
    previousInput = currentInput;
    currentInput = null;
}
function divide(){
    if(operator != null){
        equals();
    }
    operator = "/";
    previousInput = currentInput;
    currentInput = null;
}
function exponent(){
    if(operator != null){
        equals();
    }
    operator = "^";
    previousInput = currentInput;
    currentInput = null;
}
function equals(){
    console.log('in equals');
    switch(operator) {
        case "+":
            console.log('addition ' + currentInput + " " + previousInput);
            currentInput = parseInt(previousInput) + parseInt(currentInput);
            console.log('new total: ' + currentInput);
            break;
        case "-":
            currentInput = parseInt(previousInput) - parseInt(currentInput);
          break;
        case "x":
            currentInput = previousInput * currentInput;
            break;
        case "/":
            currentInput = previousInput / currentInput;
            break;
        case "*":
            currentInput = previousInput ** currentInput;
            break;
        default:
            console.log('default switch');
      }
    document.getElementById("total").innerHTML = currentInput;
    operator = null;
}
function clearTotal(){
    previousInput = null;
    currentInput = null;
    document.getElementById("total").innerHTML = "0";
}