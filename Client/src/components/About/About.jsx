import style from "./About.module.css";
import img from "../../img/rick-and-morty-toilets.jpg";

export default function About() {
  return (
    <div className={style.container}>
      <img className={style.img} src={img} alt="" />
      <div className={style.text}>
        <h1>Desarrollador : Ricardo Blazquez</h1>
        <p>
          Hola mi nombre es Ricardo Blazquez soy estudiante de ingenieria
          electronica, y actualmente un desarrollador web full stack.
        </p>
      </div>
    </div>
  );
}
