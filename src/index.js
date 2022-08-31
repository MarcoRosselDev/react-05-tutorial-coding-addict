import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

function Saludar() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <p>book</p>
      <Imag />
      <Title />
      <Author />
    </article>
  );
};

const Imag = () => (
  <img
    src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51MT0MbpD7L.jpg"
    alt="book test url"
  />
);

const Title = () => <h1>The subltle art of not giving a fuch</h1>;
const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Roger Wayne
  </h4>
);

ReactDOM.render(<Saludar />, document.getElementById("root"));

// rafce crea un react function arrow
