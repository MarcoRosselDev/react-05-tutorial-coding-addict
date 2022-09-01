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
  img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
  title: "I Love You to the Moon and BackS",
  author: "Tim Warnes",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima
          facere quos dolor consequuntur modi, magnam quibusdam molestiae
          voluptate commodi fugit, voluptas vitae iste enim totam. Maxime
          dolorum suscipit sed! Impedit voluptatibus quam hic ut tenetur labore
          alias necessitatibus debitis officiis nesciunt inventore sit quia,
          soluta
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
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
const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props; // para no repetir props.img props.title
  // este requiere el props en parametros
  return (
    <article className="book">
      <p>book</p>
      <img src={img} alt="book test url" />
      {children}
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));

// rafce crea un react function arrow
