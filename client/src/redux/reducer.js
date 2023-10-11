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
  FILTER_TEAMS,
  RESET_FILTERS,
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
      return { ...state, users: action.payload };
    }

    case GET_BY_NAME: {
      return { ...state, users: action.payload, usersCopy: action.payload };
    }

    case ORDER_AZ: {
      const nombresOrdenados = [...state.usersCopy];
      nombresOrdenados.sort((a, b) => a.name.localeCompare(b.name));

      return { ...state, usersCopy: nombresOrdenados };
    }

    case ORDER_ZA: {
      const nombresOrdenados = [...state.usersCopy];
      nombresOrdenados.sort((a, b) => b.name.localeCompare(a.name));

      return { ...state, usersCopy: nombresOrdenados };
    }

    case FILTER_API: {
      const filterApi = state.users.filter((driver) => !driver.created);
      return { ...state, usersCopy: filterApi };
    }

    case FILTER_DB: {
      const filterDb = state.users.filter((driver) => driver.created);
      return { ...state, usersCopy: filterDb };
    }

    case FILTER_TEAMS: {
      const teamsFiltrados = [];
      // eslint-disable-next-line no-unused-vars
      state.users.filter((driver) => {
        if (
          driver.teams !== undefined &&
          driver.teams.includes(action.payload)
        ) {
          teamsFiltrados.push(driver);
        }
      });
      console.log(teamsFiltrados);
      return { ...state, usersCopy: teamsFiltrados };
    }

    case GET_BY_ID: {
      return { ...state, userId: action.payload };
    }

    case POST_DRIVER: {
      return {
        ...state,
        users: [action.payload, ...state.users],
        usersCopy: [action.payload, ...state.users],
      };
    }

    case RESET_FILTERS: {
      return { ...state, usersCopy: [...state.users] };
    }

    default:
      return { ...state };
  }
};

export default reducer;

// cardsContainer esta mirando al estado global
