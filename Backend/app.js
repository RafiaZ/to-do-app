const express = require('express');

const app = express();

const connectDB = require('./config/db');

connectDB();

app.get('/', (req, res) => res.send('Hi there'));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on - ${port}`));