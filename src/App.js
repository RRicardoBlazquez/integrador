import "./App.css";
/* import Card from './components/Card.jsx'; */
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Titulo from "./components/Titulo/Titulo";
import characters from "./data.js";
import imagen from "./img/Rick_and_Morty.svg.png";

function App() {
  return (
    <div className="App">
      <Titulo title={imagen} />
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} />
      {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
    </div>
  );
}

export default App;
