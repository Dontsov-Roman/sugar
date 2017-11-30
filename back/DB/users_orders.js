const db = require('./index');
const query = db.query,
    errorHandlerFirst = db.errorHandlerFirst,
    handlerFirst = db.handlerFirst;

module.exports = {
    add:({user_id,order_id}) => db.query(`
            INSERT INTO users_orders(user_id,order_id) VALUES($1,$2) RETURNING *
        `, [user_id,order_id])
        .then(handlerFirst)
        .catch(errorHandlerFirst)
}
