console.clear();

/*

Convert the input value to lowercase when clicking a second button

– [ ] Add a second button to the index.html . It should have a down arrow (&darr;) as text content.
– [ ] Assign the second button to a variable.
– [ ] Add an event listener to the second button and have the input value converted to lowercase when it is clicked.

Hint: Access the value by using `.value` on the input element

*/

const inputUpper = document.querySelector('[data-js="first-input"]');
const upperCaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowerCaseButton = document.querySelector('[data-js="button-lowercase"]');
const inputLower = document.querySelector('[data-js="first-input"]');

upperCaseButton.addEventListener("click", () => {
  inputUpper.value = inputUpper.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", () => {
  inputLower.value = inputLower.value.toLowerCase();
});
