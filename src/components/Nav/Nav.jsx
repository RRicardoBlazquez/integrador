import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import Titulo from "../Titulo/Titulo";
import imagen from "../../img/Rick_and_Morty.svg.png";

export default function Nav(props) {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <Titulo title={imagen} />
      </div>
      <div className={style.navegador}>
        <NavLink className={style.nav} to="/home">
          <button className={style.button}>Home</button>
        </NavLink>
        <NavLink className={style.nav} to="/about">
          <button className={style.button}>Abaut</button>
        </NavLink>
      </div>
      <div className={style.search}>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
}
