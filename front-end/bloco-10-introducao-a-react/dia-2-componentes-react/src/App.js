import React from 'react'
import './App.css';
import pokemons from './data';
import Pokemonlist from './Pokemonlist';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>  
      <Pokemonlist pokemons={pokemons}/>
    </div>
  );
}

export default App;
