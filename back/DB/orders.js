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
const sqlWithUser = `SELECT
    o.id,
    o.created_at,
    o.date,
    o.is_read,
    ARRAY(
        SELECT ROW_TO_JSON(row(p.id, p.name, p.price_uah)) from prices p where p.id=ANY(o.prices_ids)
    ) as prices,
    u.email as email,
    u.phone as phone,
    u.name as name,
    u.type as type
    FROM orders as o
    LEFT JOIN users as u ON o.user_id=u.id
    `;

module.exports = {
    all: () => db.query(sqlWithUser).then(handler).catch(errorHandler),
    byId: id => db.query(sqlWithUser + ` WHERE o.id=$1`,[id]).then(handler).catch(err => errorById(id, err)),
    allNew: () => db.query(sqlWithUser + ` WHERE o.is_read=false`).then(handler).catch(err => errorById(id, err)),
};
