const db = require('./index');
const handler = res => {
    return new Promise((resolve) => {
        if(res && res.rows && res.rows.length){
            resolve(res.rows);
        }
        })
}
const error = () => ({
    errorMessage:'no clients'
});
const errorById = id => ({
    errorMessage: 'no client with id:'+id
})

module.exports = {
    all: () => db.query('SELECT * FROM clients').then(handler).catch(error),
    new: () => db.query('SELECT * FROM clients where is_read=false').then(handler).catch(error),
    byId: id => db.query('SELECT * FROM clients where id=$1',[id]).then(handler).catch(errorById(id))
};