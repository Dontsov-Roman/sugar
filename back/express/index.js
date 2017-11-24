require('babel-polyfill');
const config = require('./config.json');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.listen(config.port, () => {
    console.log('Listen port '+config.port);
})