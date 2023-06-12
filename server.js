require("dotenv").config();
const express = require('express');
// const mongoose = require('mongoose');

const routes = require('./routes');
const mongoose = require('./config/connection');

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.CONNECTION)
    .then(() => {
        console.log('Connected to crewcommsDB.')
    })

mongoose.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Crew Comms app listening at http://localhost:${PORT}`);
    });
});
