const { Router } = require("express");
const teamsHandler = require("../handlers/TeamsHandlers");

const routerTeams = Router();

// rutas teams

routerTeams.get("/", teamsHandler);

module.exports = routerTeams;
