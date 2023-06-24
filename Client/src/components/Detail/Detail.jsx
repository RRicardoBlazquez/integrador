import style from "./Detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import CardDetail from "../CardDetail/CardDetail";
const url = "https://rickandmortyapi.com/api/character/";
//const url = "http://localhost:3001/rickandmorty/character/";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${url}${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      {character ? (
        <CardDetail
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin?.name}
          image={character.image}
        />
      ) : (
        <h1>cargando...</h1>
      )}
    </div>
  );
}
