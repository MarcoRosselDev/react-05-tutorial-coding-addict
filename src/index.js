import React from "react";
import ReactDOM from "react-dom";
import Saludo from "./testing";

function Saludar() {
  return (
    <div>
      <h1>mi primer componente de react</h1>
      <Saludo />
    </div>
  );
}

ReactDOM.render(<Saludar />, document.getElementById("root"));

// rafce crea un react function arrow
