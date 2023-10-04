import axios from "axios";

export const USER_ALL = "USER_ALL";

export const getAllUsers = () => {
  return async function (dispatch) {
    const apiData = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = apiData.data;
    dispatch({ type: USER_ALL, payload: users });
  };
};

// el dispatch con el array de usuarios va al reducer
