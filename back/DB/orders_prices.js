const db = require('./index');
const query = db.query,
    errorHandlerFirst = db.errorHandlerFirst,
    handlerFirst = db.handlerFirst;

module.exports = {
    add:({order_id,price_id}) => db.query(`
        INSERT INTO orders_prices(order_id,price_id) VALUES($1,$2) RETURNING *
        `, [order_id,price_id])
        .then(handlerFirst)
        .catch(errorHandlerFirst),
    addMany:({order_id, prices}) => {
        let sql = `
            INSERT INTO orders_prices(order_id,price_id)
        `;
        prices.map((price_id, key) => {
            sql += ' VALUES('+order_id+','+price_id+')';
            console.log(key,prices.length);
            ++key <= prices.length?sql+=',':'';
        });
        console.log(sql);
        return db.query(sql);
    }
}
