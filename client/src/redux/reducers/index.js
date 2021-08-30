const initialState = {
  favoritos: [],
  pelicula: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === "SEARCH_MOVIE") {
    return {
      ...state,
      pelicula: action.payload,
    };
  }
  if (action.type === "ADD_MOVIE_FAV") {
    return {
      ...state,
      favoritos: state.favoritos.concat(action.payload),
    };
  }

  if (action.type === "GET_MOVIE_FAV") {
    return {
      ...state,
      favoritos: action.payload,
    };
  }

  if (action.type === "DEL_MOVIE_FAV") {
    console.log(action.payload, "payload");
    return {
      ...state,
      favoritos: state.favoritos.filter((e) => e.idfavmovie !== action.payload),
    };
  }

  return state;
}
export default rootReducer;
