require('babel-polyfill');
const config = require('./config.json');
const express = require('express');
const clients = require('../DB/clients')
const app = express();

function getDbResult(res){
    return new Promise((resolve,reject) => {
        if(res && res.rows && res.rows.length){
            resolve(res.rows);
        } else {
            reject(dbError());
        }
    })
}

const dbError = () => ({
    errorMessage:'something went wrong'
})

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('/clients',(req,res) => {
    clients
    .all()
    .then(getDbResult)
    .then(result => res.send(result))
    .catch(err => res.send(err))
});

app.get('/clients/new',(req,res) => {
    clients
    .new()
    .then(dbResult => res.send(dbResult))
});

app.get('/clients/:id', (req,res) => {
    const id = req.params.id;
    clients
        .byId(id)
        .then(dbResult => res.send(dbResult))
});


app.listen(config.port, () => {
    console.log('Listen port '+config.port);
})