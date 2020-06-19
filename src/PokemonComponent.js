import React, { Component } from "react";
import "./styles.css";
import { render } from "jade";


// function PokemonList(pokemon) {
//   console.log(pokemon)
//   const pokemonList = pokemon.map((pokemon, index) => {
//     return (
//       <li key={index}>
//         <span className={pokemon.nearBy} />
//         <span className="name">{pokemon.name}</span>
//         <span className="rank">{pokemon.type}</span>
//         <span className="dist">
//           {Math.floor(pokemon.dist.calculated / 1000)} km
//       </span>
//       </li>
//     );
//   });
// }

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log('POKEMON:',this.state.pokemon)
    const lat = this.refs.lat.value;
    const lng = this.refs.lng.value;
    fetch("/pokemon/near_me?lng=" + lng + "&lat=" + lat)
    .then(data => {
      // return data.json();
      data.text();
    })
    .then(text => console.log(text))
    .then(json => {
      this.setState({
        pokemon: json
      });
      console.log(json);
    });
    console.log('POKEMON:',this.state.pokemon)
  };

  render() {
    const pokemonList = this.state.pokemon.map((pokemon, index) => {
      return (
        <li key={index}>
          <span className={pokemon.nearBy} />
          <span className="name">{pokemon.name}</span>
          <span className="rank">{pokemon.type}</span>
          <span className="dist">
            {Math.floor(pokemon.dist.calculated / 1000)} km
        </span>
        </li>
      );
    });

    return (
      <div id="pokemon-container">
        <form id="search" onSubmit={this.handleSubmit}>
          <label>Enter your Latitude:</label>
          <input type="text" ref="lat" required />
          <label>Enter your Longitude:</label>
          <input type="text" ref="lng" required />
          <input type="submit" />
        </form>

        <ul>{pokemonList}</ul>
      </div>
    );
  }
}

export default Pokemon
