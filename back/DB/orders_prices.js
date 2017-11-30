const db = require('./index');
const query = db.query,
    handler = db.handler,
    errorHandler = db.errorHandler,
    errorHandlerFirst = db.errorHandlerFirst,
    handlerFirst = db.handlerFirst;

module.exports = {
    add:({order_id,price_id}) => db.query(`
        INSERT INTO orders_prices(order_id,price_id) VALUES($1,$2) RETURNING *
        `, [order_id,price_id])
        .then(handlerFirst)
        .catch(errorHandlerFirst),
    addMany:({order_id, prices}) => {
        let sql = `INSERT INTO orders_prices(order_id,price_id) VALUES`;
        prices.map((price_id, key) => {
            sql += ' ('+order_id+','+price_id+')';
            ++key < prices.length?sql+=',':'';
        });
        sql += ' RETURNING *'
        return db.query(sql)
        .then(handler)
        .catch(errorHandler)
    }
}
