const { Driver, Teams } = require("../db"); // nos traemos el modelo

const driverPost = async (
  name,
  lastName,
  description,
  image,
  nationality,
  birth,
  teams
) => {
  const [newDriver] = await Driver.findOrCreate({
    where: {
      name,
      lastName,
      description,
      image:
        image && image?.length > 0
          ? image
          : "https://img.freepik.com/premium-photo/portrait-young-male-racer-red-helmet-driving-race-car_840989-3069.jpg",
      nationality,
      birth,
    },
  });

  for (var i = 0; i < teams.length; i++) {
    const [Team] = await Teams.findOrCreate({ where: { name: teams[i] } });

    await newDriver.addTeam(Team);
  }

  return {
    ...newDriver,
    teams: teams ? teams.join(", ") : "-",
  };
};

module.exports = driverPost;
