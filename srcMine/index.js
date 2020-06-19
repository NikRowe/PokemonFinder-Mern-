

const React = require("react") ;
const ReactDOM = require("react-dom") ;
const Pokemon = require("./FindPokemon") ;

const rootElement = document.getElementById("pokemon");
ReactDOM.render(
    <Pokemon />,
  rootElement
);