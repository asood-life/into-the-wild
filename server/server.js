const express = require('express');
const cors = require('cors'); // CORS (Cross-Origin Resource Sharing) middleware
const config = require('./config/config');

// Create Express app
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Enable CORS middleware
app.use(cors());
const { MongoClient } = require('mongodb');
const client = new MongoClient(config.mongoURI);

// Define an endpoint to fetch data from MongoDB
app.get('/getAnimals', async (req, res) => {
    try {
        await client.connect();

        // connect to the "wild-ones" database and access the "animal-data" collection
        const database = client.db('wild-ones');
        const collection = database.collection('animal-data');

        // fetch all documents from the collection
        const data = await collection.find().toArray();

        // send the fetched data as a JSON response
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
