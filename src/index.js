import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

function Saludar() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <p>book</p>
      <img
        src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51MT0MbpD7L.jpg"
        alt="book test url"
      />
      <h1>Title: The subltle art of not giving a fuch</h1>
      <h4>Author: Roger Wayne</h4>
    </article>
  );
};

ReactDOM.render(<Saludar />, document.getElementById("root"));

// rafce crea un react function arrow
