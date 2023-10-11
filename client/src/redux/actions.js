import axios from "axios";

export const ALL_DRIVER = "ALL_DRIVER";
export const GET_BY_NAME = "GET_BY_NAME";
export const ORDER_AZ = "ORDER_AZ";
export const ORDER_ZA = "ORDER_ZA";
export const FILTER_API = "FILTER_API";
export const FILTER_DB = "FILTER_DB";
export const GET_BY_ID = "GET_BY_ID";
export const POST_DRIVER = "POST_DRIVER";
export const ALL_TEAMS = "ALL_TEAMS";
export const FILTER_TEAMS = "FILTRAR_TEAMS";
export const RESET_FILTERS = "RESET_FILTERS";

export const getAllUsers = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/drivers");
    const drivers = apiData.data;
    let newArray = drivers.map((driver) => ({
      id: driver.id,
      image: driver.image,
      name: driver.name,
      lastName: driver.lastName,
      teams: driver.teams,
      created: driver.created,
    }));
    dispatch({ type: ALL_DRIVER, payload: newArray });
  };
};

// el dispatch va al reducer
export const getByName = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/drivers?name=${name}`
    );
    const drivers = apiData.data;
    let newArray = drivers.map((driver) => ({
      image: driver.image,
      name: driver.name,
      lastName: driver.lastName,
      teams: driver.teams,
    }));
    dispatch({ type: GET_BY_NAME, payload: newArray });
  };
};

export const getById = (id) => {
  return async function (dispatch) {
    const idData = (await axios.get(`http://localhost:3001/drivers/${id}`))
      .data;
    dispatch({ type: GET_BY_ID, payload: idData });
  };
};

export const postDriver = (form) => {
  return async function (dispatch) {
    const Driver = await axios.post("http://localhost:3001/drivers", form);

    dispatch({ type: POST_DRIVER, payload: Driver.data });
  };
};

export const getTeams = () => {
  return async function (dispatch) {
    const teams = await axios.get("http://localhost:3001/teams");
    console.log(teams.data);
    dispatch({ type: ALL_TEAMS, payload: teams.data });
  };
};

export const filterTeams = (teamSeleccionado) => {
  console.log(teamSeleccionado);
  return { type: FILTER_TEAMS, payload: teamSeleccionado };
};

export const resetFilters = () => {
  return { type: RESET_FILTERS };
};

export const orderNameAZ = () => {
  return { type: ORDER_AZ };
};

export const orderNameZA = () => {
  return { type: ORDER_ZA };
};

export const filterApi = () => {
  return { type: FILTER_API };
};

export const filterDb = () => {
  return { type: FILTER_DB };
};
