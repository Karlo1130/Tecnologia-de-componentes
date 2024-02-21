import './App.css';
import Card from './card.js'
import SearchBar from './searchBar.js'
import RoundImage from './roundImage.js'

function App() {
  return (
    <div className="App">
      <div>
        <RoundImage />
        <h1>Recetas de cocina</h1>
      </div>

      
      <SearchBar />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
