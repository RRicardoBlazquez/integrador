const initialState = {
  myFavorites: [],
  allCharacter: [],
  characters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacter: action.payload,
      };
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacter: action.payload,
      };
    case "FILTER":
      let filterByGender = state.allCharacter;
      if (action.payload !== "All") {
        filterByGender = state.allCharacter?.filter(
          (char) => char.gender === action.payload
        );
      }
      return {
        ...state,
        myFavorites: filterByGender,
      };

    case "ORDER":
      return {
        ...state,
        myFavorites: state.myFavorites.sort((a, b) =>
          action.payload === "A" ? a.id - b.id : b.id - a.id
        ),
      };
    case "GET_CHARACTER":
      return {
        ...state,
        characters: [...state.characters, action.payload],
      };

    case "DELETE_CHARACTER":
      return {
        ...state,
        characters: state.characters.filter(
          (personaje) => parseInt(personaje.id) !== parseInt(action.payload)
        ),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
