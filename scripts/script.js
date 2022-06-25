let x = 5;
let y = 2;
const PLUS = "+";
const SUB = "-";
const MUL = "*";
const DIVIDE = "/";
const EQ = "=";
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const operations=['*','+','-','/','='];
let operFlip = false;
let opDone = false;
let op1 = true;
let lastOpChange = false;
let lastOperation = '';
let no1 = 0;
let no2 = 0;
let eqFlip = false;

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
  let ret = n2 === 0 ? "OOPS" : n1 / n2;
  ret = ret === "OOPS" ?  ret : ret.toFixed(1);
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

function updateDisplay(input,operation) {
  if(dispCounter >= 11 && !operations.includes(operation)) {
    if(input == "Clear") {
      dispVal = "";
      display.textContent = '';
      dispCounter = 0;
      op1 = true;
      operFlip = false;
      lastOpChange = false;
      dontCall = false;
      eqFlip = false;
      no1 = 0;
      no2 = 0;
      lastOperation = '';
    }
    return;
  }
  if(operations.includes(operation)) {
    if(op1) {
      if(!operFlip) {
        if(operation === EQ) {
          eqFlip = true;
        }
        no2 = Number(dispVal);
        dispVal = operate(lastOperation, no1, no2);
        no1 = Number(dispVal);
        dispVal = dispVal.toString();
        opDone = true;
        op1 = false;
        lastOperation = operation;
      } else {
        lastOperation = operation;
        if(lastOperation === EQ) {
          operFlip = false;
        } else {
          no1 = Number(dispVal);
          dispVal = '';
          dispCounter = 0;
        }
      }
    } else {
      if(operation === EQ) {
          eqFlip = true;

      }
          no2 = Number(dispVal);
          dispVal = operate(lastOperation, no1, no2);
          no1 = Number(dispVal);
          dispVal = dispVal.toString();
          opDone = true;
          lastOperation = operation
    }

  } else {
    switch(input) {
      case "Clear":
      dispVal = "";
      display.textContent = '';
      dispCounter = 0;
      op1 = true;
      operFlip = false;
      no1 = 0;
      no2 = 0;
      eqFlip = false;
      lastOpChange = false;
      lastOperation = '';
        break;
      default:
        break;
    }
  }
  display.textContent = dispVal;
  if(opDone) {
    dispVal = '';
    dispCounter = 0;
    opDone = false;
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let dontCall = false;
    let input = button.textContent.trim();
    let operation = '';
    if(!operations.includes(input)) {
      if(eqFlip) {
        dispVal = "";
        display.textContent = '';
        dispCounter = 0;
        op1 = true;
        operFlip = false;
        lastOpChange = false;
        dontCall = false;
        no1 = 0;
        eqFlip = false;
        no2 = 0;
        lastOperation = '';
      }
      dispVal += input;
      dispCounter++;
      operation = '';
    }
    else {
      if(eqFlip) {
        if(input === EQ) {
          dontCall = true;
        }

      }
      operation = input;
      operFlip = operFlip ? false : true;
      console.log(`oper ${operFlip}`);
    }
    if(!dontCall) {
      updateDisplay(input,operation);
    }
    dontCall = false;
    console.log(button.textContent.trim());
  });
});
