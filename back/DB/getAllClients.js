const db = require('./index');
// db.query('SELECT * FROM clients')
//     .then(res=>console.log(res));
module.exports = {
    clients:db.query('SELECT * FROM clients')
};