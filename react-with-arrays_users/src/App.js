// given code for this challenge

// import React from "react";
// import "./styles.css";
// import Card from "./components/Card";
// import Title from "./components/Title";
// import { USERS } from "./db";

// export default function App() {
//   return (
//     <main className="app">
//       <Title text="ClientBoard" />
//       <div className="app__card-grid">
//         <Card user={USERS[0]} />
//       </div>
//     </main>
//   );
// }

// my 3 pennies of code
import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => (
          <Card key={USERS.id} user={USERS[0]} />
        ))}
      </div>
    </main>
  );
}
