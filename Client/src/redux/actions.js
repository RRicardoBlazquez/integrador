import axios from "axios";
//const url = "http://localhost:3001/rickandmorty/character/";
const url = "https://rickandmortyapi.com/api/character/";

export function addFav(personaje) {
  return {
    type: "ADD_FAV",
    payload: personaje,
  };
}

export function removeFav(id) {
  return {
    type: "REMOVE_FAV",
    payload: id,
  };
}

export function filterCards(gender) {
  return {
    type: "FILTER",
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: "ORDER",
    payload: order,
  };
}

export function getCharacter(id) {
  return function (dispatch) {
    axios(`${url}${id}`).then(({ data }) => {
      if (data?.name)
        dispatch({
          type: "GET_CHARACTER",
          payload: data,
        });
    });
  };
}

/* export function getCharacter(personaje) {
  return {
    type: "GET_CHARACTER",
    payload: personaje,
    
  };
} */

export function deleteCharacter(id) {
  return {
    type: "DELETE_CHARACTER",
    payload: id,
  };
}
