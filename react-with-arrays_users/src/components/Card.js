// Given Code

// import "./Card.css";
// import Tag from "./Tag";
// import Button from "./Button";

// function Card({ user }) {
//   return (
//     <article className="card">
//       <h2>{user.name}</h2>
//       <ul className="card__taglist">
//         <Tag tag={user.roles[0]} />
//       </ul>
//       <p>{user.about}</p>
//       <Button>edit</Button>
//       <Button buttonType="danger">invoice</Button>
//     </article>
//   );
// }

// export default Card;

// my 1 Cent for coding at this Task

import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";

function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {user.roles.map((role) => (
          <Tag key={role} tag={role} />
        ))}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
