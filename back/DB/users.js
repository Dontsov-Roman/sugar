const db = require('./index');
const query = db.query,
    handler = db.handler,
    errorHandler = db.errorHandler;

const errorById = (id, error) => {
    console.log(error);
    return{
        errorMessage: 'no user with id '+id
    }
}

module.exports = {
    all: () => db.query('SELECT * FROM users').then(handler).catch(errorHandler),
    allClients: () => db.query('SELECT * FROM users where type=2').then(handler).catch(errorHandler),
    byId: id => db.query('SELECT * FROM users where id=$1',[id]).then(handler).catch(err => errorById(id, err)),
    clientById: id => db.query('SELECT * FROM users where id=$1 and type=2',[id]).then(handler).catch(err => errorById(id, err))
};