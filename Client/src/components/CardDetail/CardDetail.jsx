import style from "./CardDetail.module.css";

export default function CardDetail(props) {
  return (
    <div className={style.container}>
      <img className={style.img} src={props.image} alt="" />
      <div className={style.texto}>
        <h2 className={style.Text}>Name : {props.name}</h2>
        <h2 className={style.Text}>Status : {props.status}</h2>
        <h2 className={style.Text}>Species : {props.species}</h2>
        <h2 className={style.Text}>Gender : {props.gender}</h2>
        <h2 className={style.Text}>origin: {props.origin}</h2>
      </div>
    </div>
  );
}
