console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

console.log(
  "Datum : " +
    new Date().getDay() +
    new Date().getMonth() +
    new Date().getyear() +
    new Date().getHours() +
    new Date().getMinutes()
);

function getGreeting() {
  // Code here
}

function getDayColor() {
  // Code here
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
