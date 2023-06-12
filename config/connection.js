require("dotenv").config();

const { connect, Mongoose } = require('mongoose');

let mongoose;

mongoose = new Mongoose(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        port: 3001
    }
);

const connectionString = process.env.CONNECTION || 'mongodb://127.0.0.1:27017/crewconnectDB';

connect(connectionString);

//export connection
module.exports = mongoose;