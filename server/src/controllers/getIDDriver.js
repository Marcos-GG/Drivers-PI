const { Driver } = require("../db"); // nos traemos el modelo
const axios = require("axios");
const cleanDriver = require("../utils/cleanDriver");
const { Teams } = require("../db");

const driverId = async (id, desdeDb) => {
  if (desdeDb) {
    const driverEncontrado = await Driver.findOne({
      where: {
        id: id,
      },
      include: {
        model: Teams,
      },
    });

    if (!driverEncontrado) return null;

    const cleanDriverConTeams = {
      ...driverEncontrado?.dataValues,

      teams: driverEncontrado.Teams?.map((team) => team.name)?.join(", "),
      Teams: undefined,
    };

    return cleanDriverConTeams;
  } else {
    const idDriver = (await axios.get(`${process.env.API_URL}/${id}`)).data;

    if (!idDriver?.id) return null;

    return cleanDriver(idDriver);
  }
};

module.exports = driverId;
