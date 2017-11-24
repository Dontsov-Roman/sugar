require('babel-polyfill');
const config = require('./config.json');
const express = require('express');
const clients = require('../DB/clients')
const app = express();

const dbError = () => ({
    errorMessage:'something went wrong'
})

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('/clients',(req,res) => {
    clients
    .all()
    .then(result => res.send(result))
    .catch(err => res.send(err))
});

app.get('/clients/new',(req,res) => {
    clients
    .new()
    .then(result => res.send(result))
    .catch(err => res.send(err))
});

app.get('/clients/:id', (req,res) => {
    const id = req.params.id;
    clients
        .byId(id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});


app.listen(config.port, () => {
    console.log('Listen port '+config.port);
})