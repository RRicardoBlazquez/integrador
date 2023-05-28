import { useEffect, useState } from "react";
import axios from "axios";
import { Route, useLocation, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";

const EMAIL = "rblazquez111@gmail.com";
const PASSWORD = "ricardo123";

function App() {
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

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
  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
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
