import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <HelloWorldArticle />
      <HelloWorldArticleTwo />
    </div>
  );
}

function HelloWorldArticle() {
  return (
    <div>
      <h1>Hello World!</h1>
      <div>
        <p>Welcome to my very first tries as a WebDev Idiot.</p>
        <p>
          If I can see this in the browser I have caused it on my very own
          crumbled head.
        </p>
        <div>
          <button>AMAZING!</button>
        </div>
      </div>
    </div>
  );
}

function HelloWorldArticleTwo() {
  return (
    <div>
      <p>Welcome to my very 2nd try as a WebDev Idiot.</p>
      <p>
        If I can see this in the browser I have caused it on my very own
        crumbled head.
      </p>
      <div>
        <button>AMAZING!</button>
      </div>
    </div>
  );
}
