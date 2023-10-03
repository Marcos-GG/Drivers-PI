const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

//

// creamos nuestros models (tablas) con las validaciones
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Driver",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created: {
        type: DataTypes.BOOLEAN,
        defaultValue: true, // sirve para saber desde el front que lo cree yo
      },
    },
    { timestamps: false } // saca los campos de fecha y registro
  );
};
