const express = require('express');
const orderRoutes = require('./orders');
const app = express(); // express app
const mongoose = require('mongoose');

require('dotenv').config(); // import dotenv file

const port = 3031;
const dburi = process.env.DATABASE_URI;

// middleware
// app.use(express.json());
// app.use(express.urlencoded( { extended: true } ));

// routes
app.use('/', orderRoutes);

// connect to DB
mongoose.connect(dburi)
    .then(() => {
        // listen for requests
        app.listen(port, () => {
            console.log('Connected to DB');
            console.log('App running on http://localhost:' + port);
        });
    })
    .catch((error) => {
        console.log(error)
    });

//close db connection
const cleanup = (event) => {
    console.log('Database connection closed');
    client.close();
    process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);