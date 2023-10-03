const getTeams = require("../controllers/getTeams");

const teamsHandler = async (req, res) => {
  try {
    const teams = await getTeams();

    return res.status(200).json(teams);
  } catch (error) {
    return res.status(200).send("no se cargaron los teams");
  }
};

module.exports = teamsHandler;
