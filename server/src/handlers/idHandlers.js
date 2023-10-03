const driverId = require("../controllers/getIDDriver");

const idHandler = async (req, res) => {
  const { id } = req.params;
  const desdeDb = isNaN(id);

  try {
    const Driver = await driverId(id, desdeDb);

    if (!Driver) throw new Error("No se encontro Driver");

    return res.status(200).json(Driver);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = idHandler;
