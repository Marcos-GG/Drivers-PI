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
      //COPIA DEL DRIVER (dataValues, porque driverEncontrado es un Modelo, y el Modelo no es iterable.)
      ...driverEncontrado?.dataValues,
      /// La idea es dejarlo igual que la api (con teams con minuscula, y que sea una string de nombres de team separados por coma)

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
