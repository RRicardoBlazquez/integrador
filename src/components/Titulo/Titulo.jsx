import style from "./Titulo.module.css";

export default function Titulo(props) {
  return (
    <div className={style.container}>
      <img className={style.title} src={props.title} alt="" />
    </div>
  );
}
