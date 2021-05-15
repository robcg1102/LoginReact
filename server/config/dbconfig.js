const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost/mydbpropia", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((result) => {
      console.log("Conectado a la base de datos: ", result.connections[0].name);
    })
    .catch((error) => {
      console.log("Hubo un error en la conexión a la DB: ", error);
    });
};

module.exports = connectDB;