const { Driver } = require("../db"); // nos traemos el modelo
const axios = require("axios");
const cleanDriver = require("../utils/cleanDriver");
const { Op } = require("sequelize");

const getAllDrivers = async (name) => {
  const apiResponse = (await axios.get(process.env.API_URL)).data;

  const apiDrivers = apiResponse.map((driver) => cleanDriver(driver));

  const driversDb = name
    ? await Driver.findAll({
        where: {
          name: {
            [Op.iLike]: `${name}%`,
          },
        },
      })
    : await Driver.findAll();

  let allDrivers = [];

  if (name) {
    const apiFilter = apiDrivers.filter(
      (driver) => driver.name.toLowerCase() === name.toLowerCase()
    );

    allDrivers = [...apiFilter, ...driversDb].slice(0, 15);
  } else {
    allDrivers = [...apiDrivers, ...driversDb];
  }

  return allDrivers;
};

module.exports = getAllDrivers;
