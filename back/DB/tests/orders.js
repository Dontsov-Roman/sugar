const orders = require('../orders');
orders.all(1)
.then(res => console.log(JSON.stringify(res)))
.catch(err => {
    console.log('error');
    console.log(err);
});
