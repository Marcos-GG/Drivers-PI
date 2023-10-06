import { ALL_DRIVER, GET_BY_NAME } from "./actions";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DRIVER: {
      return { ...state, users: action.payload };
    }
    case GET_BY_NAME: {
      return { ...state, users: action.payload };
    }

    default:
      return { ...state };
  }
};

export default reducer;

// cardsContainer esta mirando al estado global
