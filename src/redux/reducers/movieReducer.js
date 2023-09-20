const initialState = {
  movie_id: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MOVIE_ID":
      return { ...state, movie_id: action.payload };

    default:
      return state;
  }
};

export default movieReducer;
