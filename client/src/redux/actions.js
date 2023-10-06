import axios from "axios";

export const ALL_DRIVER = "ALL_DRIVER";
export const GET_BY_NAME = "GET_BY_NAME";

export const getAllUsers = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/drivers");
    const drivers = apiData.data;
    let newArray = drivers.map((driver) => ({
      image: driver.image,
      name: driver.name,
      lastName: driver.lastName,
      teams: driver.teams,
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
