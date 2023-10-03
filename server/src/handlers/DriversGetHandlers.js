const getAllDrivers = require("../controllers/getAllDrivers");

const DriverHandler = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const driverName = await getAllDrivers(name);

      if (driverName.length === 0)
        return res
          .status(200)
          .json({ error: "no existe el conductor con ese nombre" });

      return res.status(200).json(driverName);
    } else {
      const driverAll = await getAllDrivers();

      return res.status(200).json(driverAll);
    }
  } catch (error) {
    return res.status(300).send(error.message);
  }
};

module.exports = DriverHandler;
