const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION);
        console.log('Base de datos online');
    } catch (error) {
        console.error(error);
        throw new Error('Error de conexion a la base de datos');
    }
}

module.exports = {
    dbConnection,
}