const initialState = {
  searchInput: "",
  searchResults: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_INPUT":
      return { ...state, searchInput: action.payload };

    case "SET_SEARCH_RESULTS":
      return { ...state, searchResults: action.payload };

    default:
      return state;
  }
};

export default searchReducer;
