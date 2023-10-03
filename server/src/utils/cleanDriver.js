const cleanDriver = (driver) => {
  return {
    id: driver?.id,
    name: driver?.name?.forename,
    lastName: driver?.name?.surname,
    image:
      driver.image?.url?.length > 0
        ? driver?.image?.url
        : "https://img.freepik.com/premium-photo/portrait-young-male-racer-red-helmet-driving-race-car_840989-3069.jpg",
    teams: driver?.teams,
    nationality: driver?.nationality,
    birth: driver?.dob,
    description: driver?.description,
    created: false,
  };
};

module.exports = cleanDriver;
