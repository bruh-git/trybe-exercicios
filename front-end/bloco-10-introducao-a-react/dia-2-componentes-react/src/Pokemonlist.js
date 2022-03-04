import React,{Component} from 'react';
import Pokemon from './Pokemon';

class Pokemonlist extends Component {
  render() {
    const {pokemons} = this.props;
    return (
      <div className='pokedex'>
        {
            pokemons.map((pokemon)=> {
              return < Pokemon key={pokemon.id} pokemon={pokemon}/>})
        }
      </div>
    )
  }
}
export default Pokemonlist; 