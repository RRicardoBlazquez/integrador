/* import style from "/Card.module.css"; */
import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.container}>
      <button className={style.button} onClick={props.onClose}>
        X
      </button>
      <h2 className={style.Text}>{props.name}</h2>
      <h2 className={style.Text}>status:{props.status}</h2>
      <h2 className={style.Text}>{props.species}</h2>
      <h2 className={style.Text}>{props.gender}</h2>
      <h2 className={style.Text}>origen:{props.origin}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}
