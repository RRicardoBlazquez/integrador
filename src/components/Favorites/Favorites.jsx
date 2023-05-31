import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";

export default function Favorites(props) {
  const { myFavorites } = useSelector((state) => state);

  return (
    <div>
      <Cards characters={myFavorites} onClose={props.onClose} />;
    </div>
  );
}

/* const listaPersonaje = myFavorites.map((personaje) => {
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

return <div className={style.container}>{listaPersonajes}</div>; */
