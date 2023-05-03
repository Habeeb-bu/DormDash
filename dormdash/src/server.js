const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

const port = process.env.PORT || 3030;
const dburi = process.env.DATABASE_URI;
const client = new MongoClient(dburi, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// middleware
app.use(express.json());
app.use(express.urlencoded( { extended: true } ));

// create POST API route
app.post('/orderconfirmed', async (req, res) => {
    console.log("Posted to mongo")
    console.log(req.body);

    const data = { ...req.body, dateOfOrder: new Date() }; // ... copies whatever i have in an array and makes a deep copy

    const collection = client.db("Orders").collection("Orders");
    try {
        await collection.insertOne(data);
    } catch (error) {
        console.log(error.message);
    }
    res.status(201);
    res.redirect('/orderconfirmed');
});

app.post('/orderfood', async (req, res) => {
    console.log('You posted from a form!');
    console.log(req.body);

    const data = { ...req.body, dateOfOrder: new Date() }; // ... copies whatever i have in an array and makes a deep copy

    const collection = client.db("Orders").collection("Orders");
    try {
        await collection.insertOne(data);
    } catch (error) {
        console.log(error.message);
    }
    res.status(201);
    res.redirect('/orderconfirmed');
});

// catch all routes
app.use(express.static('public'));

app.listen(port, () => {
    console.log('App running on http://localhost:' + port);
    // connect to database

    client.connect(err => {
        if (err) {
            console.log('Error!', err.message);
            return;
        }

        console.log('Connected to database successfully!');
    });
});

//gracefully close db connection
const cleanup = (event) => {
    console.log('Database connection closed');
    client.close();
    process.exit();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);