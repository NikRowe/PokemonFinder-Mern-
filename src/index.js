import React from "react";
import ReactDOM from "react-dom";

import Pokemon from "./PokemonComponent";

const rootElement = document.getElementById("pokemon");
ReactDOM.render(
  <React.StrictMode>
    <Pokemon />
  </React.StrictMode>,
  rootElement
);
