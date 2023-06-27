import axios from "axios";
const url = "http://localhost:3001/rickandmorty/character/";
//const url = "https://rickandmortyapi.com/api/character/";

export function addFav(personaje) {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, personaje);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {}
  };
}

export function removeFav(id) {
  const endpoint = "http://localhost:3001/rickandmorty/fav/";
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${endpoint}${id}`);
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {}
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
  return async function (dispatch) {
    try {
      const { data } = await axios(`${url}${id}`);
      if (data?.name)
        dispatch({
          type: "GET_CHARACTER",
          payload: data,
        });
    } catch (error) {}
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
