require('babel-polyfill');
const express = require('express');
const config = require('./config.json');
const users = require('../DB/users');
const prices = require('../DB/prices');
const app = express();

const dbError = () => ({
    errorMessage:'something went wrong'
})

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('/prices',(req,res) => {
    prices
    .all()
    .then(result => res.send(result))
    .catch(err => res.send(err))
});

app.get('/users',(req,res) => {
    users
    .all()
    .then(result => res.send(result))
    .catch(err => res.send(err))
});

app.get('/clients',(req,res) => {
    users
    .allClients()
    .then(result => res.send(result))
    .catch(err => res.send({err, error:'error'}))
});

app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    users
        .byId(id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});

app.get('/clients/:id', (req,res) => {
    const id = req.params.id;
    users
        .clientById(id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});

app.listen(config.port, () => {
    console.log('Listen port '+config.port);
})
