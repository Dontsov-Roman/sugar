const db = require('./index');
const query = db.query,
    handler = db.handler,
    errorHandler = db.errorHandler;

const errorById = (id, error) => {
    console.log(error);
    return{
        errorMessage: 'no order with id '+id
    }
}
const selectJoin =`SELECT
    o.id,
    o.created_at,
    o.date,
    o.is_read,
    TO_JSON(u) as user,
    JSON_AGG(p) as prices
    FROM orders as o
    LEFT JOIN users_orders uo ON o.id=uo.order_id
    LEFT JOIN users u ON uo.user_id=u.id
    LEFT JOIN orders_prices op ON o.id=op.order_id
    LEFT JOIN prices p ON op.price_id=p.id
    `;

const groupBy = ` GROUP BY o.id, u.id`;

module.exports = {
    all: () => db.query(selectJoin + groupBy).then(handler).catch(errorHandler),
    byId: id => db.query(selectJoin + ` WHERE o.id=$1` + groupBy,[id]).then(handler).catch(err => errorById(id, err)),
    allNew: () => db.query(selectJoin + ` WHERE o.is_read=FALSE` + groupBy).then(handler).catch(errorHandler),
};
