// given Code for this challenge

// import "./styles.css";

// export default function App() {
//   let isActive = false;

//   function handleClick() {
//     isActive = !isActive;
//     // Check that the value changes correctly.
//     console.log(isActive);
//   }

//   return (
//     <main>
//       <div className={`box ${isActive ? "box--active" : ""}`} />
//       <button onClick={handleClick}>Activate</button>
//     </main>
//   );
// }

// starting from here you will see my 5 pence of code below this:

import "./styles.css";
import { useState } from "react";

export default function App() {
  const [actualState, setActualState] = useState(false);

  function handleClick() {
    // setActualState(!actualState);
    setActualState((prevState) => {
      return !prevState;
    });
    console.log(actualState);
  }
  return (
    <main>
      <div className={`box ${actualState ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {actualState ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
