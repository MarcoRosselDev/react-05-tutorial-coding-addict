import React from "react";
import ReactDOM from "react-dom";

// CSS
import "./index.css";

// object books
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51MT0MbpD7L.jpg",
    title: "Title: The subltle art of not giving a fuch",
    author: "Author: Roger Wayne",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Tim Warnes",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/41KY-NORo9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: "The 48 Laws of Power Paperback",
    author: "Robert Greene",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}
// los dos son lo mismo
const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="book test url" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));

// rafce crea un react function arrow
