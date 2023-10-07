const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;

conn
  .sync({ force: false })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server conectado a base de datos, puerto ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
