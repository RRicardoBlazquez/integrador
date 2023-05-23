import { useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";

import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (id) => {
    if (
      id.length === 0 ||
      id > 826 ||
      characters.some((char) => char.id === parseInt(id))
    ) {
      return 0;
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name && characters.filter(data.id)) {
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
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

        {/* <Route path="/*" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
