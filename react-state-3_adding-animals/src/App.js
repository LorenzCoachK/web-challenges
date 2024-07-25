// given Code for this Task:
// import { useState } from "react";
// import "./styles.css";
// import Form from "./components/Form/index.js";
// import List from "./components/List/index.js";

// const initialAnimals = [
//   {
//     id: "mTBErig",
//     name: "Octopus",
//     emoji: "🐙",
//   },
//   {
//     id: "iMsbXQ1",
//     name: "Crocodile",
//     emoji: "🐊",
//   },
//   {
//     id: "Qjf_K7V",
//     name: "Beaver",
//     emoji: "🦫",
//   },
// ];

// export default function App() {
//   const [animals, setAnimals] = useState(initialAnimals);

//   function handleAddAnimal(newAnimal) {
//     console.log(newAnimal);
//   }

//   return (
//     <main className="app">
//       <Form onAddAnimal={handleAddAnimal} />
//       <List animals={animals} />
//     </main>
//   );
// }

// my single Penny of coding below this:

import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  function handleAddAnimal(newAnimal) {
    const animalWithId = { ...newAnimal, id: uid() };
    setAnimals([...animals, animalWithId]); // added at pos. 29 the new variable animalsWithID
    // console.log(newAnimal);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
