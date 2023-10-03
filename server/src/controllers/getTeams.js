const { Teams } = require("../db");
const axios = require("axios");

const getTeams = async () => {
  const response = await axios.get(process.env.API_URL);
  const teamsApi = response.data;

  const allTeams = teamsApi.forEach((driver) => {
    if (driver.teams) {
      let separarTeams = driver.teams.split(",").map((t) => t.trim());
      separarTeams.forEach((team) => {
        Teams.findOrCreate({ where: { name: team } });
      });
    }
  });
  return allTeams;
};

module.exports = getTeams;
