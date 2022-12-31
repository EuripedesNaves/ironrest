const mongoose = require('mongoose');
require('dotenv').config();


const connect = async () => {
    try {
        const connection = await mongoose.connect(process.env.DB, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        });
        console.log(`Connect to Mongo! DataBase: ${connection.connections[0].name}`);
    }catch (error) {
        console.log(error)
    }
}

connect()