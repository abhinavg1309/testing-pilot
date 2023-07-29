// Create web server
// 1. npm init
// 2. npm install express
// 3. node comments.js
// 4. open browser http://localhost:3000/comments

const express = require('express');
const app = express();

// Create a server
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/comments');
});

// Create router
app.get('/comments', (req, res) => {
    res.send('<h1>Comments</h1>');
});