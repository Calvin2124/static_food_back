const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;


// Middleware cors
const app = express(); 
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

const linkApp = `http://localhost:${port}`;

app.listen(port, () => {
    console.log(`Server is running on port ${linkApp}`);
});
