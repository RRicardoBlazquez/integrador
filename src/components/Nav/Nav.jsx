import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import Titulo from "../Titulo/Titulo";
import imagen from "../../img/Rick_and_Morty.svg.png";

export default function Nav(props) {
  return (
    <div className={style.container}>
      <Titulo title={imagen} />
      <div className={style.navegador}>
        <NavLink className={style.nav} to="/home">
          <button className={style.button}>Home</button>
        </NavLink>
        <NavLink className={style.nav} to="/about">
          <button className={style.button}>Abaut</button>
        </NavLink>
      </div>
      <SearchBar onSearch={props.onSearch} />
      <hr className={style.linea} />
    </div>
  );
}
