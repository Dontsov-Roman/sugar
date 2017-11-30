const db = require('./index');
const query = db.query;
const orders = require('./orders');
const users = require('./users');
const orders_prices = require('./orders_prices');
const users_orders = require('./users_orders');

module.exports = async ({
    email,
    phone,
    name,
    date,
    prices
}) => {
    try{
        let user_id,
        order_id;
        await query(`BEGIN`);
        let user = await users.findByPhone(phone);
        if(user){
            user_id=user.id;
            //Update user's name,email;
            user = await users.updateById({id:user_id,phone,email,name});
            // console.log('updatedUser', user);
        } else {
            //Create new user
            user = await users.add({phone,email,name});
            user_id = user.id;
            // console.log('new User', user);
        }
        //Create new order
        const order = await orders.add({date});
        order_id = order.id;
        // console.log(order,order_id);

        const uo = await users_orders.add({user_id,order_id});
        // console.log(uo);
        const op = await orders_prices.addMany({order_id,prices});
        // console.log(op);

        console.log('GOOD WORK!');
        await query(`ROLLBACK`);
        // await query(`COMMIT`);
        return {
            order,
            user,
            users_orders:uo,
            orders_prices:op
        };
    }
    catch(e){
        await query(`ROLLBACK`);
        throw(e);
    }
};
