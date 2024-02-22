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

function App() {
  return (
    <div className="App">
      <div id="headDiv">
        <RoundImage Image={logo}/>

        <h1>Recetas de cocina</h1>
      </div>
      <SearchBar />
      <div id="cardDiv">
      <Card Image={pizza} Title='pizza' Text='pizza'/>
      <Card Image={hot_dog} Title='hot dog' Text='hot dog'/>
      <Card Image={mole} Title='mole' Text='mole'/>
      <Card Image={huevito} Title='huevito' Text='huevito'/>
      <Card Image={salchicha} Title='salchicha' Text='salchicha'/>
      <Card Image={hot_cakes} Title='hot cakes' Text='hot cakes'/>
      <Card Image={hamburger} Title='hamburger' Text='hamburger'/>
      <Card Image={cereal} Title='cereal' Text='cereal'/>
      </div>

    </div>
  );
}

export default App;
