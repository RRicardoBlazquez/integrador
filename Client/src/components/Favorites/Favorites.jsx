import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Favorites(props) {
  const { myFavorites } = useSelector((state) => state);
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const listaPersonajes = myFavorites?.map((personaje) => {
    return (
      <li className={style.lista} key={personaje.id}>
        {
          <Card
            id={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            gender={personaje.gender}
            origin={personaje.origin?.name}
            image={personaje.image}
            onClose={() => props.onClose(personaje.id)}
          />
        }
      </li>
    );
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    switch (name) {
      case "filter":
        dispatch(filterCards(value));
        break;
      case "order":
        dispatch(orderCards(value));
        setAux(!aux);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className={style.select}>
        <select className={style.option} name="order" onChange={handleChange}>
          <option value="A">Upward</option>
          <option value="D">Falling</option>
        </select>

        <select className={style.option} name="filter" onChange={handleChange}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={style.container}>{listaPersonajes}</div>
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
