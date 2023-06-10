import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = useSelector((state) => state);
  const listaPersonajes = characters.map((personaje) => {
    return (
      <li className={style.lista} key={personaje.id}>
        {
          <Card
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin.name}
            image={personaje.image}
            onClose={() => props.onClose(personaje.id)}
          />
        }
      </li>
    );
  });

  return <div className={style.container}>{listaPersonajes}</div>;
}
