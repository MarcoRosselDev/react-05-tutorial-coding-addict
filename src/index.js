import React from "react";
import ReactDOM from "react-dom";

function Saludar() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      this is a cart
      <Imag />
    </article>
  );
};

const Imag = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51MT0MbpD7L.jpg"
      alt="book test url"
    />
  );
};

ReactDOM.render(<Saludar />, document.getElementById("root"));

// rafce crea un react function arrow
