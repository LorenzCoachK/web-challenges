import "./styles.css";

// given code to add own code below
// export default function App() {
//   return <h1>Replace me with your component!</h1>;
// }

// my first tries to code
export default function App() {
  function handleStudent(hair) {
    console.log("haircut :", hair);
  }
  return (
    <div>
      <FellowStudents
        hair="bold"
        name="Serco"
        emoji="🧑🏼‍🦲"
        onStudents={handleStudent}
      />
      <FellowStudents
        hair="midlong"
        name="Nataliia"
        emoji="👧🏼"
        onStudents={handleStudent}
      />
      <FellowStudents
        hair="parting of hair"
        name="Daniel"
        emoji="🧔🏻"
        onStudents={handleStudent}
      />
    </div>
  );
}

function FellowStudents({ name, emoji, hair, onStudents }) {
  return (
    <div>
      <button onClick={() => onStudents(hair)}>
        {name} {emoji}
      </button>
    </div>
  );
}
