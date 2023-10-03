const { Router } = require("express");
const routerDrivers = require("./DriversRouts");
const routerTeams = require("./TeamsRouts");

const router = Router();

// declaramos quienes tienen nuestras rutas

router.use("/drivers", routerDrivers);
router.use("/teams", routerTeams);

module.exports = router;
