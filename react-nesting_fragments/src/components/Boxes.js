// Lösung der ersten Aufgabe / Darstellung hozizontal:

import { isDOMComponent } from "react-dom/test-utils";

// import React from "react";
// import Box from "./Box.js";

// function Boxes() {
//   return (
//     <div>
//       <Box color="#007bff" />
//       <Box color="#fc3" />
//       <Box color="#ff3333" />
//     </div>
//   );
// }
// export default Boxes;

// Lösung mit der Verwendung von React Fragments:

import React from "react";
import Box from "./Box.js";

function Boxes() {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
}

export default Boxes;
