import {
  ALL_DRIVER,
  GET_BY_NAME,
  ORDER_AZ,
  ORDER_ZA,
  FILTER_API,
  FILTER_DB,
  GET_BY_ID,
} from "./actions";

const initialState = {
  users: [],
  usersCopy: [],
  userId: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_DRIVER: {
      return { ...state, users: action.payload };
    }
    case GET_BY_NAME: {
      return { ...state, users: action.payload };
    }
    case ORDER_AZ: {
      const nombresOrdenados = [...state.users];
      nombresOrdenados.sort((a, b) => a.name.localeCompare(b.name));

      return { ...state, users: nombresOrdenados };
    }
    case ORDER_ZA: {
      const nombresOrdenados = [...state.users];
      nombresOrdenados.sort((a, b) => b.name.localeCompare(a.name));

      return { ...state, users: nombresOrdenados };
    }
    case FILTER_API: {
      const allDrivers = [...state.users];
      const filterApi = allDrivers.filter((driver) => driver.created === false);

      return { ...state, users: filterApi };
    }
    case FILTER_DB: {
      const allDrivers = [...state.users];
      const filterDb = allDrivers.filter((driver) => driver.created === true);

      return { ...state, users: filterDb };
    }
    case GET_BY_ID: {
      console.log("reducer", action.payload);
      return { ...state, userId: action.payload };
    }

    default:
      return { ...state };
  }
};

export default reducer;

// cardsContainer esta mirando al estado global
