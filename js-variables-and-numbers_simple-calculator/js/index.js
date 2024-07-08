console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  const sumOfOperand1AndOperand2 = operand1 + operand2;
  console.log("ADD RESULT :", sumOfOperand1AndOperand2);
});

console.log("OPERAND 1: ", operand1);
console.log("OPERAND 2: ", operand2);

subtractButton.addEventListener("click", () => {
  const minuendOfOperand1AndOperand2 = operand1 - operand2;
  console.log("SUBSTRACTION RESULT :", minuendOfOperand1AndOperand2);
});

multiplyButton.addEventListener("click", () => {
  const productOfOperand1AndOperand2 = operand1 * operand2;
  console.log("MULTIPLICATION RESULT :", productOfOperand1AndOperand2);
});

divideButton.addEventListener("click", () => {
  const quotientOfOperand1AndOperand2 = operand1 / operand2;
  console.log("DIVISION RESULT :", quotientOfOperand1AndOperand2);
});

exponentButton.addEventListener("click", () => {
  const exponentOfOperand1AndOperand2 = operand1 ** operand2;
  console.log("EXPONENT / RAISE RESULT :", exponentOfOperand1AndOperand2);
});

moduloButton.addEventListener("click", () => {
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
  const remainOfOperand1AndOperand2 = operand1 % operand2;
  console.log("REMAIN RESULT :", remainOfOperand1AndOperand2);
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  operand1++;
  console.log("Increase by 1 of Operand1 : ", operand1);
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
  operand1 += 5;
  console.log("Increase by 5 of Operand1 : ", operand1);
});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
  operand1--;
  console.log("Decrease by 1 : ", operand1);
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
  operand1 -= 5;
  console.log("Decrease by 5 : ", operand1);
});

multiplyByTwoButton.addEventListener("click", () => {
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
  operand1 *= 2;
  console.log("Multiplied by 2 : ", operand1);
});

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
  operand1 /= 2;
  console.log("Decrease by 5 : ", operand1);
});
