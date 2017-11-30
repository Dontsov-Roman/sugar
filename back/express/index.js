require('babel-polyfill');
const express = require('express');
const addresses = require('addresses');
const config = require('./config.json');
const users = require('../DB/users');
const prices = require('../DB/prices');
const orders = require('../DB/orders');
const app = express();

const dbError = () => ({
    errorMessage:'something went wrong'
});

const response = res => result => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get(addresses.home, (req, res) => {
    res.send('Hello world!')
});

app.get(addresses.prices,(req,res) => {
    prices
    .all()
    .then(result => response(res)(result))
    .catch(err => response(res)(err))
});

app.get(addresses.prices,(req,res) => {
    users
    .all()
    .then(result => response(res)(result))
    .catch(err => response(res)(err))
});

app.get(addresses.clients,(req,res) => {
    users
    .allClients()
    .then(result => response(res)(result))
    .catch(err => response(res)(err))
});

app.get(addresses.users+'/:id', (req,res) => {
    const id = req.params.id;
    users
        .byId(id)
        .then(result => response(res)(result))
        .catch(err => response(res)(err))
});

app.get(addresses.clients+'/:id', (req,res) => {
    const id = req.params.id;
    users
        .findClientById(id)
        .then(result => response(res)(result))
        .catch(err => response(res)(err))
});

app.get(addresses.orders, (req, res) => {
    orders
        .all()
        .then(result => response(res)(result))
        .catch(err => response(res)(err))
});

app.get(addresses.orders+'/new', (req, res) => {
    orders
        .allNew()
        .then(result => response(res)(result))
        .catch(err => response(res)(err))
});

app.get(addresses.orders+'/:id', (req, res) => {
    const id = req.params.id;
    orders
        .byId(id)
        .then(result => response(res)(result))
        .catch(err => response(res)(err))
});

app.listen(config.port, () => {
    console.log('Listen port '+config.port);
})
