import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";
// setup vars
const title = "Title: The subltle art of not giving a fuch";
const author = "Author: Roger Wayne";
const img =
  "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51MT0MbpD7L.jpg";

function Saludar() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <p>book</p>
      <img src={img} alt="book test url" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      {console.log(props)}
    </article>
  );
};

ReactDOM.render(<Saludar />, document.getElementById("root"));

// rafce crea un react function arrow
