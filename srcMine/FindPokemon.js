import React from 'react'

var Pokemon = React.createClass({
    getInitialState: function () {
        return ({
            pokemon: []
        });
    },
    render: function () {
        var pokemon = this.state.pokemon;
        pokemon = pokemon.map(function (pokemon, index) {
            return (
                <li key={index}>
                    <span className={pokemon.nearBy}></span>
                    <span className="name">{pokemon.name}</span>
                    <span className="rank">{pokemon.rank}</span>
                    <span className="dist">{Math.floor(pokemon.dis / 1000)} km</span>
                </li>
            );
        });
        return (
            <div id="pokemon-container">
                <form id="search" onSubmit={this.handleSubmit}>
                    <label>Enter your Latitude:</label>
                    <input type="text" ref="lat" placeholder="latitude" required />
                    <label>Enter your Longitude:</label>
                    <input type="text" ref="lng" placeholder="longitude" required />
                    <input type="submit" value="Find pokemon" />
                </form>
                <ul>{pokemon}</ul>
            </div>
        );
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var lng = this.refs.lng.value;
        var lat = this.refs.lat.value;

        fetch('/pokemon/near_me?lng=' + lng + '&lat=' + lat).then(function (data) {
            return data.json();
        }).then(json => {
            this.setState({
                pokemon: json
            });
            console.log(json);
        });
    }
});

export default Pokemon