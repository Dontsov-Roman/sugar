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
            console.log('updatedUser', user);
        } else {
            //Create new user
            user = await users.add({phone,email,name});
            user_id = user.id;
            console.log('new User', user);
        }
        //Create new order
        const order = await orders.add({date});
        order_id = order.id;
        console.log(order,order_id);

        const uo = await users_orders.add({user_id,order_id});
        console.log(uo);
        const or_pr = await orders_prices.addMany({order_id,prices});
        console.log(or_pr);
        // prices.map(async price_id => {
        //     const or_pr = await orders_prices.add({order_id, price_id});
        //     console.log(or_pr);
        //     return or_pr;
        // })

        await query(`ROLLBACK`);
        console.log('GOOD WORK!')
        // await query(`COMMIT`);
    }
    catch(e){
        await query(`ROLLBACK`);
        throw(e);
    }
};
