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

  const [pokemonDataList, setPokemonDataList] = useState([]);
  const [search, setSearch] = useState("");
  const [isPressed, setIsPressed] = useState([])
  
  const pokemonURL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';
  
  useEffect(() => {
    fetch(pokemonURL)
      .then(response => response.json())
      .then(response => {
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

  const searcher = (e) => {
    setSearch(e.target.value);
  }

  

  return (
    <div className="App"> 
      <div id="headDiv">

        <h1>Pokedex Kanto</h1>
      </div>
      <SearchBar 
        Search={searcher}
      />
      <div id="cardDiv">

      {pokemonDataList.length > 0 ? (
        pokemonDataList.map((pokemon, index) => {

          var searchLength = search.length;

          if (search === ""){
            return (
              <Card 
                Image={pokemon.sprites.front_default} 
                Title={pokemon.name}
                Text={
                  "Numero: " + pokemon.order +
                  "\nPeso: " + pokemon.weight
                }
                Button={false}
              />
            );
          }else if (search === pokemon.name.substring(0, searchLength)) {
            return (
              <Card 
                Image={pokemon.sprites.front_default} 
                Title={pokemon.name}
                Text={
                  "Numero: " + pokemon.order +
                  "\nPeso: " + pokemon.weight
                }
                Button={false}
              />
            );
          }
          return null; // Opcional: Si no se cumple la condición, no se renderiza nada
        })
      ) : (
        <Card Image={hot_dog} Title='cargando' />
      )}

      </div>

    </div>
  );
}

export default App;
