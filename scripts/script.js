let x = 5;
let y = 2;
const PLUS = "plus";
const SUB = "sub";
const MUL = "mul";
const DIVIDE = "divide";

console.log(operate(PLUS, x, y));
console.log(operate(SUB, x, y));
console.log(operate(MUL, x, y));
console.log(operate(DIVIDE, x, y));

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
