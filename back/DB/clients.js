const db = require('./index');
// db.query('SELECT * FROM clients')
//     .then(res=>console.log(res));
module.exports = {
    all: () => db.query('SELECT * FROM clients'),
    new: () => db.query('SELECT * FROM clients where is_read=false'),
    byId: id => db.query('SELECT * FROM clients where id=$1',[id])
};