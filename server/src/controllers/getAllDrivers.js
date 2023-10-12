const { Driver } = require("../db"); // nos traemos el modelo
const axios = require("axios");
const cleanDriver = require("../utils/cleanDriver");
const { Op } = require("sequelize");
const { Teams } = require("../db");

const getAllDrivers = async (name) => {
  const apiResponse = (await axios.get(process.env.API_URL)).data;

  const apiDrivers = apiResponse.map((driver) => cleanDriver(driver));

  let driversDb = name
    ? await Driver.findAll({
        where: {
          name: {
            [Op.iLike]: `${name}%`,
          },
        },
        include: {
          model: Teams,
        },
      })
    : await Driver.findAll({
        include: {
          model: Teams,
        },
      });

  driversDb = driversDb?.map((driver) => {
    let teams = driver?.Teams
      ? driver?.Teams?.map((team) => team.name)?.join(", ")
      : [];

    return {
      id: driver.id,
      image: driver.image,
      name: driver.name,
      lastName: driver.lastName,
      created: driver.created,
      birth: driver.birth,
      teams,
    };
  });

  let allDrivers = [];

  if (name) {
    const apiFilter = apiDrivers.filter((driver) =>
      driver.name.toLowerCase().startsWith(name.toLowerCase())
    );

    allDrivers = [...driversDb, ...apiFilter].slice(0, 15);
  } else {
    allDrivers = [...driversDb, ...apiDrivers];
  }

  return allDrivers;
};

module.exports = getAllDrivers;
