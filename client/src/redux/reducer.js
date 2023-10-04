import { USER_ALL } from "./actions";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ALL: {
      return { ...state, users: action.payload };
    }

    default:
      return { ...state };
  }
};

export default reducer;

// cardsContainer esta mirando al estado global
