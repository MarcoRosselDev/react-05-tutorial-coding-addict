import React from "react";
import ReactDOM from  'react-dom'

function Saludar() {
  return <h1>mi primer componente de react</h1>
}

ReactDOM.render(<Saludar />, document.getElementById('root'));