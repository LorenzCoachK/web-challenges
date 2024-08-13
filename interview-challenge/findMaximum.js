// Find the maximum
// function maxOfTwoNumbers(num1, num2) {
//     // TODO:
//   }

/*
Task in own words: show the maximum (e.g. the highest value) number from a list of two numbers
expected result: If num1 > num2 show num1. But if num2 < numn1 show num2. 
UNKNOWN: what if num1 = num2
*/

/*
read num1 and num2 and compare each with each other
show num1 if num1 > num2
else show num2
*/

const num1 = 2;
const num2 = 2;

function compareAndLogHigherValue(a, b) {
  if (a > b) {
    console.log("the higher Value is num1:", a);
  } else if (b > a) {
    console.log("the higher value is b:", b);
  } else {
    console.log("both values are eqal:", a, "=", b);
  }
}

compareAndLogHigherValue(num1, num2);
