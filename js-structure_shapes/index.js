console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";
import { Square } from "./components/Circle/Circle.js";
import { Pentagon } from "./components/Circle/Circle.js";

const root = document.getElementById("root");

const circleElement = Circle();
const squareElement = Square();
const pentagonEpement = Pentagon();
// root.appendChild(circleElement);

root.appendChild(Circle());
root.appendChild(Square());
root.appendChild(Pentagon());
