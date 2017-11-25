require('babel-polyfill');
const config = require('./config.json');
const express = require('express');
const users = require('../DB/users')
const app = express();

const dbError = () => ({
    errorMessage:'something went wrong'
})

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('/users',(req,res) => {
    users
    .all()
    .then(result => res.send(result))
    .catch(err => res.send(err))
});

app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    users
        .byId(id)
        .then(result => res.send(result))
        .catch(err => res.send(err))
});


app.listen(config.port, () => {
    console.log('Listen port '+config.port);
})
