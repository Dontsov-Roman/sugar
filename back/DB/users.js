const db = require('./index');
const handler = res => {
    return new Promise( resolve => {
        console.log(res);
        if(res && res.rows && res.rows.length){
            resolve(res.rows);
        } })
}
const error = err => {
    console.log(err);
    return {
        errorMessage:'no clients'
    }
};
const errorById = id => ({
    errorMessage: 'no client with id:'+id
})

module.exports = {
    all: () => db.query('SELECT * FROM users').then(handler).catch(error),
    byId: id => db.query('SELECT * FROM users where id=$1',[id]).then(handler).catch(errorById(id))
};
