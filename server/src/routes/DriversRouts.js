const { Router } = require("express");
const DriverHandler = require("../handlers/DriversGetHandlers");
const idHandler = require("../handlers/idHandlers");
const postHandler = require("../handlers/postHandlers");

const routerDrivers = Router();

// rutas drivers

routerDrivers.get("/", DriverHandler);
routerDrivers.get("/:id", idHandler);
routerDrivers.post("/", postHandler);

module.exports = routerDrivers;
