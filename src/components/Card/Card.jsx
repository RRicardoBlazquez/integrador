import { NavLink } from "react-router-dom";
import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.container}>
      <button className={style.button} onClick={props.onClose}>
        X
      </button>
      <img className={style.img} src={props.image} alt="" />
      <NavLink to={`/detail/${props.id}`}>
        <h2 className={style.Text}>{props.name}</h2>
      </NavLink>
      {/* <h2 className={style.Text}>status:{props.status}</h2>
      <h2 className={style.Text}>{props.species}</h2>
      <h2 className={style.Text}>{props.gender}</h2>
      <h2 className={style.Text}>origen:{props.origin}</h2> */}
    </div>
  );
}
