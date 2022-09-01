import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// object books
const books = [
  {
    img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51MT0MbpD7L.jpg",
    title: "Title: The subltle art of not giving a fuch",
    author: "Author: Roger Wayne",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and BackS",
    author: "Tim Warnes",
  },
];
const names = ["marco", "susan", "lusho"];
const newNames = names.map((name) => {
  return <h1>{name} </h1>;
});

function Booklist() {
  return <section className="booklist">{newNames} </section>;
}
/*
function Saludar() {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book title="random title" number={29} />
    </section>
  );
}*/

// los dos son lo mismo
const Book = (props) => {
  const { img, title, author } = props; // para no repetir props.img props.title
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

ReactDOM.render(<Booklist />, document.getElementById("root"));

// rafce crea un react function arrow
