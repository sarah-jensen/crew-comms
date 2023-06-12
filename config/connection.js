const { connect, connection } = require('mongoose');

const connectionString = process.env.CONNECTION || 'mongodb://127.0.0.1:27017/crewconnectDB';

connect(connectionString);

//export connection
module.exports = connection;