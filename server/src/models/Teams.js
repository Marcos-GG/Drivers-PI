const { DataTypes } = require("sequelize");

// creamos el segundo modelo con las validaciones

module.exports = (sequelize) => {
  //definimos modelo
  sequelize.define(
    "Teams",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
