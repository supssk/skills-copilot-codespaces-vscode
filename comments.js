//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Importing the comments.js file
const comments = require('./comments.js');

//Setting up the route for the comments
app.use('/comments', comments);

//Setting up the route for the root
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Create the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});