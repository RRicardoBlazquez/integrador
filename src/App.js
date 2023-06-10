import { useState } from "react";
import { Route, useLocation, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { deleteCharacter, getCharacter } from "./redux/actions";

const EMAIL = "rblazquez111@gmail.com";
const PASSWORD = "ricardo123";

function App() {
  const { characters } = useSelector((state) => state);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  /* useEffect(() => {
    !access && navigate("/");
  }, [access]); */

  const onSearch = (id) => {
    if (
      id.length === 0 ||
      id > 826 ||
      characters?.some((char) => parseInt(char.id) === parseInt(id))
    )
      return 0;
    dispatch(getCharacter(id));
  };

  function onClose(id) {
    dispatch(deleteCharacter(id));
  }
  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  return (
    <div className="App">
      {pathname !== "/" && access && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="/detail/:id" element={<Detail />} />

        {/* <Route path="/*" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
