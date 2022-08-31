import React from "react";
import ReactDOM from "react-dom";

function Saludar() {
  return (
    <section>
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
  return <article>this is a cart</article>;
};

ReactDOM.render(<Saludar />, document.getElementById("root"));

// rafce crea un react function arrow
