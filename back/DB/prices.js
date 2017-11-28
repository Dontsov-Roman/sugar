const db = require('./index');
const query = db.query,
    handler = db.handler,
    errorHandler = db.errorHandler;

const errorById = (id, error) => {
    console.log(error);
    return{
        errorMessage: 'no price with id '+id
    }
}

module.exports = {
    all: () => db.query('SELECT * FROM prices').then(handler).catch(errorHandler),
    byId: id => db.query('SELECT * FROM prices where id=$1',[id]).then(handler).catch(err => errorById(id, err)),
};
