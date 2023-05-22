import style from "./CardDetail.module.css";

export default function CardDetail(props) {
  return (
    <div className={style.container}>
      <img className={style.img} src={props.image} alt="" />
      <div className={style.texto}>
        <h2 className={style.Text}>Name : {props.name}</h2>
        <h2 className={style.Text}>Status : {props.status}</h2>
        <h2 className={style.Text}>Specie : {props.species}</h2>
        <h2 className={style.Text}>Genero : {props.gender}</h2>
        <h2 className={style.Text}>origen: {props.origin}</h2>
      </div>
    </div>
  );
}
