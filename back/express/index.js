require('babel-polyfill');
const config = require('./config.json');
const express = require('express');
const clients = require('../DB/clients')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('/clients',(req,res) => {
    clients
    .all()
    .then(dbResult=>res.send(dbResult))
});

app.get('/clients/new',(req,res) => {
    clients
    .new()
    .then(dbResult=>res.send(dbResult))
});

app.get('/clients/:id', (req,res) => {
    const id = req.params.id;
    clients
        .byId(id)
        .then(dbResult=>res.send(dbResult))
});


app.listen(config.port, () => {
    console.log('Listen port '+config.port);
})