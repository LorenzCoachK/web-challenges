console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! Your are logged in as Brunhilde1984");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
  // The % is the remainer
  console.log("Variable 'number' is even number");
} else {
  console.log("Variable 'number' is even number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000000;
let price = 2;

if (numberOfHotdogs < 5) {
  console.log("Below 5 Hotdods, the price per Hotdog is 2 EUR");
} else if (numberOfHotdogs >= 5 && numberOfHotdogs <= 99) {
  price = 1.5;
  console.log(
    "Up from 5 Hotdogs till 99 Hotdogs, the price is 1,50 per Hotdog"
  );
} else if (numberOfHotdogs >= 100 && numberOfHotdogs <= 999999) {
  price = 1;
  console.log(
    "Up from 100 Hotdogs till 999.999 Hotdogs, the price is 1,00 per Hotdog"
  );
} else if (numberOfHotdogs >= 1000000) {
  price = 0.1;
  console.log(
    "Up from 1.000.000 HotDogs, your Special Price is 0,10 EUR per Hotdog!"
  );
}

// Part 4: Daytime
const currentHour = 17;
const statement = currentHour < 17 ? "Still need to learn..." : "Party !";

console.log(statement);

// Part 5: Greeting given topics:
// const userName = "Archibald";

// const greeting = "Hello " + "//enter your code here" + "!";

// console.log(greeting);

// Part 5: my solution:
// const userName = "Archibald";

// const greeting = userName === "Archibald" ? "Hello Coach!" : userName;

// console.log(greeting);

// Part 5: my 2nd solution:
const userName = "Toll";

const greeting =
  userName === "Archibald" ? "Hello " + userName + "!" : userName;

console.log(greeting);
