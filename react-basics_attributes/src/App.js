import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}
function Article() {
  return (
    <div className="article">
      <h2 className="article__title">Dritte Challenge</h2>
      <label htmlFor="inputID">
        Label:
        <input id="inputID" type="text" />
      </label>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Michael_Jordan"
      >
        Wikipedia Artikel über Michael Jordan
      </a>
    </div>
  );
}
