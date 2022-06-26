const PLUS = "+";
const SUB = "-";
const MUL = "*";
const DIVIDE = "/";
const EQ = "=";
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');
const operations = ['*', '+', '-', '/', '='];
let operFlip = false;
let opDone = false;
let op1 = true;
let lastOperation = '';
let opMode = false;
let no1 = 0;
let no2 = 0;
let eqFlip = false;
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
  ret = ret === "OOPS" ? ret : ret.toFixed(1);
  return ret;
}

function reset() {
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
  opMode = false;
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

function updateDisplay(input, operation) {
  if (dispCounter >= 11 && !operations.includes(operation)) {
    if (input == "Clear") {
      reset();
    }
    return;
  }
  if (operations.includes(operation)) {
    if (op1) {
      if (!operFlip) {
        if (operation === EQ) {
          eqFlip = true;
		  opMode = false;
        }
        no2 = Number(dispVal);
        dispVal = operate(lastOperation, no1, no2);
        no1 = Number(dispVal);
        dispVal = dispVal.toString();
        opDone = true;
        op1 = false;
        lastOperation = operation;
        opMode = true;
      } else {
        lastOperation = operation;
        if (lastOperation === EQ) {
          operFlip = false;
        } else {
          no1 = Number(dispVal);
          dispVal = '';
          dispCounter = 0;
          opMode = true;
        }
      }
    } else {
      if (!eqFlip) {
        if (operation === EQ) {
          eqFlip = true;
		  opMode = false;
        }
        no2 = Number(dispVal);
        dispVal = operate(lastOperation, no1, no2);
        no1 = Number(dispVal);
        dispVal = dispVal.toString();
        opDone = true;
        lastOperation = operation;
        opMode = true;
      } else {
        eqFlip = false;
        lastOperation = operation
      }
    }


  } else {
    if (input === "Clear") {
      reset();
    }
  }
  display.textContent = dispVal;
  if (opDone) {
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
    if (!operations.includes(input)) {
      if (eqFlip) {
        reset();
      }
      dispVal += input;
      dispCounter++;
      operation = '';
      opMode = false;
    } else {
      if (eqFlip) {
        if (input === EQ) {
          dontCall = true;
        }
		opMode = false;
      }
      if (opMode) {
        dontCall = true
      }
      operation = input;
      operFlip = operFlip ? false : true;
    }
    if (!dontCall) {
      updateDisplay(input, operation);
    }
    dontCall = false;
  });
});
