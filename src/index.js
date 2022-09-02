import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

import { books } from "./books";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
// los dos son lo mismo
const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickAlert = () => alert("hello");
  const complexExample = (author) => console.log(author);
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="book test url" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={clickAlert}>
        click me pls
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));

// rafce crea un react function arrow
