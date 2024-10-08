// GEGEBENE AUFGABE
// const input = document.querySelector('[data-js="age-input"]');
// const button = document.querySelector('[data-js="age-button"]');
// const output = document.querySelector('[data-js="age-output"]');

// button.addEventListener("click", () => {
//   // Number(x) converts the string from the input to a number
//   // Beware: input values are *always* strings!
//   const age = Number(input.value);

//   // Exercise:
//   // Use conditions and the logical AND operator to write
//   // "You are a teen." or "You are not a teen." into the output.
// });

// Meine 1. Lösung dazu

// const input = document.querySelector('[data-js="age-input"]');
// const button = document.querySelector('[data-js="age-button"]');
// const output = document.querySelector('[data-js="age-output"]');

// button.addEventListener("click", () => {
//   // Number(x) converts the string from the input to a number
//   // Beware: input values are *always* strings!
//   const age = Number(input.value);
//   if (age <= 12) {
//     console.log("You are not a teen.");
//   } else if (age >= 13 && age <= 19) {
//     console.log("You are a teen");
//   } else if (age >= 20) {
//     console.log("You are not a teen.");
//   }
//   // Exercise:
//   // Use conditions and the logical AND operator to write
//   // "You are a teen." or "You are not a teen." into the output.
// });

// Meine 2. Lösung dazu

const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  output.textContent =
    age >= 13 && age <= 19 ? "You are a teen" : "You are a not teen!";
});
