import {
  ALL_TEAMS,
  ALL_DRIVER,
  GET_BY_NAME,
  ORDER_AZ,
  ORDER_ZA,
  FILTER_API,
  FILTER_DB,
  GET_BY_ID,
  POST_DRIVER,
} from "./actions";

const initialState = {
  users: [],
  teams: [],
  usersCopy: [],
  userId: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_TEAMS: {
      return { ...state, teams: action.payload };
    }
    case ALL_DRIVER: {
      return { ...state, users: action.payload, usersCopy: action.payload };
    }
    case GET_BY_NAME: {
      return { ...state, users: action.payload, usersCopy: action.payload };
    }
    case ORDER_AZ: {
      const nombresOrdenados = [...state.users];
      nombresOrdenados.sort((a, b) => a.name.localeCompare(b.name));

      return { ...state, usersCopy: nombresOrdenados };
    }
    case ORDER_ZA: {
      const nombresOrdenados = [...state.users];
      nombresOrdenados.sort((a, b) => b.name.localeCompare(a.name));

      return { ...state, usersCopy: nombresOrdenados };
    }
    case FILTER_API: {
      const filterApi = state.users.filter(
        (driver) => driver.created === false
      );
      return { ...state, usersCopy: filterApi };
    }
    case FILTER_DB: {
      const filterDb = state.users.filter((driver) => driver.created === true);
      return { ...state, usersCopy: filterDb };
    }
    case GET_BY_ID: {
      console.log(action.payload);
      return { ...state, userId: action.payload };
    }

    case POST_DRIVER: {
      return {
        ...state,
        users: [action.payload, ...state.users],
        usersCopy: [action.payload, ...state.users],
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;

// cardsContainer esta mirando al estado global
