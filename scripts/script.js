let x = 5;
let y = 2;
const PLUS = "plus";
const SUB = "sub";
const MUL = "mul";
const DIVIDE = "divide";
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const operations=['*','+','-','/','='];

console.log(operate(PLUS, x, y));
console.log(operate(SUB, x, y));
console.log(operate(MUL, x, y));
console.log(operate(DIVIDE, x, y));

let dispVal = '';
let dispCounter = 0;

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n2 === 0 ? "OOPS" : n1 / n2;
}

function operate(op, n1, n2) {
  switch (op) {
    case PLUS:
      return add(n1, n2);
      break;
    case SUB:
      return subtract(n1, n2);
      break;
    case MUL:
      return multiply(n1, n2);
    case DIVIDE:
      return divide(n1, n2);
    default:
      return "OOPS";
      break;
  }
  return "OOPS";
}

function updateDisplay(input) {
  if(dispCounter >= 12) {
    if(input == "Clear") {
      dispVal = "";
      display.textContent = '';
      dispCounter = 0;
    }
    return;
  }
  switch(input) {
    case "Clear":
      dispVal = "";
      dispCounter = 0;
      break;
    default:
      break;
  }
  display.textContent = dispVal;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let input = button.textContent.trim();
    let operation = '';
    if(!operations.includes(input)) {
      dispVal += input;
      dispCounter++;
    }
    else {
      operation = '';
    }
    updateDisplay(input);
    console.log(button.textContent.trim());
  });
});
