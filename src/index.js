import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// object books
const firstBook = {
  img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51MT0MbpD7L.jpg",
  title: "Title: The subltle art of not giving a fuch",
  author: "Author: Roger Wayne",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg",
  title: "I Love You to the Moon and BackS",
  author: "Tim Warnes",
};

function Saludar() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={29} />
    </section>
  );
}

// los dos son lo mismo
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props; // para no repetir props.img props.title
  // este requiere el props en parametros
  return (
    <article className="book">
      <p>book</p>
      <img src={img} alt="book test url" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDOM.render(<Saludar />, document.getElementById("root"));

// rafce crea un react function arrow
