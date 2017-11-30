const db = require('./index');
const query = db.query,
    handler = db.handler,
    errorHandler = db.errorHandler,
    errorHandlerFirst = db.errorHandlerFirst,
    handlerFirst = db.handlerFirst;


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
    findClientById: id => db.query('SELECT * FROM users where id=$1 and type=2',[id]).then(handler).catch(err => errorById(id, err)),
    findByPhone: phone => db.query(`
            SELECT * FROM users WHERE phone=$1
        `,
        [phone])
        .then(handlerFirst)
        .catch(errorHandlerFirst),
    add: ({name,email,phone}) => db.query(`
            INSERT INTO users (name,email,phone)
            VALUES($1,$2,$3) RETURNING *`,
            [name,email,phone]
        )
        .then(handlerFirst)
        .catch(errorHandlerFirst),
    updateById: ({id,name,email,phone}) => db.query(`
            UPDATE users SET (name,email,phone) = ($1,$2,$3)
            WHERE id=$4
            RETURNING *
        `,
        [name,email,phone,id]
    )
        .then(handlerFirst)
        .catch(errorHandlerFirst)
        // .then(handler).catch(errorHandler)
};
