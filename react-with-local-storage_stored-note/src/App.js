// import { useState } from "react";
// import FontSelector from "./components/FontSelector";
// import Note from "./components/Note";
// import "./styles.css";

// export default function App() {
//   const [note, setNote] = useState("");
//   const [font, setFont] = useState("system-ui");

//   function handleNoteChange(newNote) {
//     setNote(newNote);
//   }

//   function handleFontChange(newFont) {
//     setFont(newFont);
//   }

//   return (
//     <div className="app" style={{ "--font": font }}>
//       <FontSelector font={font} onFontChange={handleFontChange} />
//       <Note note={note} onNoteChange={handleNoteChange} />
//     </div>
//   );
// }

// my pennies today to try coding:

import { useState } from "react";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import useLocalStorageState from "use-local-storage-state";
import "./styles.css";

export default function App() {
  const [note, setNote] = useLocalStorageState("note", {
    defaultValue: "",
  });
  const [font, setFont] = useLocalStorageState("system-ui", {
    defaultValue: "system-ui",
  });

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}
