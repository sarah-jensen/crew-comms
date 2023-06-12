
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Crew Comms app listening at http://localhost:${port}`);
    });
});
