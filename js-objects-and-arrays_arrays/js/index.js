console.clear();

// EXERCISE 1
// Modify the array exampleArray so that it contains a number and a string.

// const exampleArray = [true];

const exampleArray = [23, "MJ"];

// EXERCISE 2
// Nest an array inside array nestedArray. After that nestedArray should contain an array as an element.

// const nestedArray = ["example", 10, true];

const nestedArray = ["example", ["Jonas Vingegaard", 1], 10, true];

// EXERCISE 3
// Change the value of firstNumber to equal the first value of the numbers array using bracket notation.

// const numbers = [20, 10, 50];

// const firstNumber = "change me";

const numbers = [20, 10, 50];

const firstNumber = 20;

// EXERCISE 4
// Change the fruit stored at index 0 of fruits to mango.

// const fruits = ["apple", "banana", "grapefruit"];

const fruits = ["apple", "banana", "grapefruit"];
fruits[0] = "mango";

// EXERCISE 5
// Change the value of nestedNumber to equal the fourth number of nestedNumbers using bracket notation.

// const nestedNumbers = [10, [20, 30, [40, 50]]];

// const nestedNumber = "change me";

const nestedNumbers = [10, [20, 30, [40, 50]]];

const nestedNumber = 40;

// EXERCISE 6
// Put "rat" onto the end of petsWithPush variable by using the array method `.push()`.

// const petsWithPush = ["dog", "cat", "rabbit"];

const petsWithPush = ["dog", "cat", "rabbit"];
petsWithPush.push("rat");

// EXERCISE 7
// Use the pop method to remove the last item from fruitsWithPop.

// const fruitsWithPop = ["apple", "banana", "mango"];

const fruitsWithPop = ["apple", "banana", "mango"];
fruitsWithPop.pop();

// EXERCISE 8
// Put "hamster" onto the start of unshiftedPets variable by using the array method unshift.

// const unshiftedPets = ["dog", "cat", "rabbit"];

const unshiftedPets = ["dog", "cat", "rabbit"];
unshiftedPets.unshift("hamster");

// EXERCISE 9
// Use the shift method to remove the first item from shiftedFruits.

// const shiftedFruits = ["apple", "banana", "mango"];

const shiftedFruits = ["apple", "banana", "mango"];
shiftedFruits.shift("apple");

export {
  exampleArray,
  nestedArray,
  firstNumber,
  fruits,
  nestedNumber,
  petsWithPush,
  fruitsWithPop,
  unshiftedPets,
  shiftedFruits,
};
