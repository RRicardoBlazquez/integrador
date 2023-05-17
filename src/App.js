import { useState } from "react";
import axios from "axios";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Titulo from "./components/Titulo/Titulo";
import imagen from "./img/Rick_and_Morty.svg.png";
import Cards from "./components/Cards/Cards.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  function onClose(id) {
    setCharacters(
      characters.filter((personaje) => personaje.id !== parseInt(id))
    );
  }
  return (
    <div className="App">
      {<Titulo title={imagen} />}
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
