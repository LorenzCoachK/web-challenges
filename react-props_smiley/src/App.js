import React from "react";
import "./styles.css";

// given code for this challenge
// export default function App() {
//   return <h1>Replace me with your component!</h1>;
// }

// my first tries to code some code below this:
import Smiley from "./Smiley";

export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
      {/* <Smiley isHappy={false} /> */}
    </div>
  );
}
