import './App.css';
import Card from './card.js'
import SearchBar from './searchBar.js'
import RoundImage from './roundImage.js'
import logo from './cook_logo.png'
import pizza from './pizza.jpg'
import hot_dog from './hot_dog.jpg'
import mole from './mole.jpg'
import huevito from './huevito.jpg'
import salchicha from './salchicha.jpg'
import hot_cakes from './hot_cakes.jpg'
import hamburger from './hamburger.jpg'
import cereal from './cereal.jpg'
import { useEffect, useState } from 'react';

function App() {

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonDataList, setPokemonDataList] = useState([]);
  
  const pokemonURL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';
  
  useEffect(() => {
    fetch(pokemonURL)
      .then(response => response.json())
      .then(response => {
        setPokemonList(response.results)
        const list = response.results;
        const promises = list.map(pokemon =>
          fetch(pokemon.url).then(response => response.json())
        );
  
        Promise.all(promises)
          .then(pokemonDataList => {
            setPokemonDataList(pokemonDataList)
          })
      })
  }, []);

  return (
    <div className="App"> 
      <div id="headDiv">
        <RoundImage Image={logo}/>

        <h1>Recetas de cocina</h1>
      </div>
      <SearchBar />
      <div id="cardDiv">
      
      {pokemonDataList.length > 0 ? (
        pokemonList.map((pokemon, index) => (
         <Card 
          Image={pokemonDataList[index].sprites.front_default} 
          Title={pokemon.name}
          Text={
            "Numero: "+pokemonDataList[index].order+
            "\nPeso: "+pokemonDataList[index].weight}
          />
          
        ))
      ):(
        <Card Image={hot_dog} Title='cargando'/>

      )}


      </div>

    </div>
  );
}

export default App;
