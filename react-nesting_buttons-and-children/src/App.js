// Given code for this task:
// import React from "react";
// import "./styles.css";

// export default function App() {
//   return (
//     <main>
//       <Button />
//       <Button />
//       <Button />
//       <Button />
//     </main>
//   );
// }

// function Button() {
//   return (
//     <button className="button" type="button">
//       Click me!
//     </button>
//   );
// }

// My first tries to write some code below this:
import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Happy Coding</Button>
      <Button>mit neue Fische </Button>
      <Button>ich mache</Button>
      <Button>childrean in react</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
