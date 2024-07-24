// Given code for this Taks:

// import React from "react";
// import "./styles.css";
// import Box from "./components/Box";

// export default function App() {
//   return (
//     <main className="flex-container">
//       <Box color="#007bff" />
//       <Box color="#fc3" />
//       <Box color="#ff3333" />
//     </main>
//   );
// }

// my first tries to write some code below this:
import React from "react";
import "./styles.css";
// import Box from "./components/Box";
import Boxes from "./components/Boxes";

export default function App() {
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}
