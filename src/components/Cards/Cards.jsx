import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const personajes = props.characters;
  const listaPersonajes = personajes.map((personaje) => {
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
