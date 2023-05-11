import style from "./Titulo.module.css";

export default function Titulo(props) {
  return (
    <div className={style.title}>
      <img src={props.title} alt="" />
    </div>
  );
}
