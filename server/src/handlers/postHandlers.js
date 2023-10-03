const driverPost = require("../controllers/postDrivers");

const postHandler = async (req, res) => {
  const { name, lastName, description, image, nationality, birth, teams } =
    req.body;

  try {
    if (!name || !lastName || !description || !nationality || !birth || !teams)
      return res
        .status(400)
        .json({ error: "Falta informacion para crear el personje" });
    else {
      const newDriver = await driverPost(
        name,
        lastName,
        description,
        image,
        nationality,
        birth,
        teams
      );

      return res.status(200).json(newDriver);
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postHandler;
