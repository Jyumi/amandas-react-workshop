//TODO
/*
<div>
  <h1>My PokeTeam!</h1>
  <<PokeTeam goes here>>
</div>
*/
import React from 'react';
import PokeTeam from './PokeTeam.jsx'
import examplePokemonTeam from '../../../data/examplePokeTeam.js'
import getPokemon from '../../../lib/getPokemon.js'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pokeTeam: examplePokemonTeam
    }
  }

  addPokemon(query, index) {
    getPokemon(query, ({data}) => {
      let{id, name, sprites} = data;
      // this.setState()
    })
  }

  render(){
    return (
      <div>
        <h1>My PokeTeam!</h1>
        <PokeTeam pokeTeam={this.state.pokeTeam} addPokemon={this.addPokemon.bind(this)}/>
      </div>
    )
  }
}

export default App