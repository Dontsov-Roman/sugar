const orders = require('../orders');
orders.all()
.then(res => console.log(JSON.stringify(res)))
.catch(err => {
    console.log('error');
    console.log(err);
});
orders.allNew()
.then(res => console.log(JSON.stringify(res)))
.catch(err => {
    console.log('error');
    console.log(err);
});
orders.byId(1)
.then(res => console.log(JSON.stringify(res)))
.catch(err => {
    console.log('error');
    console.log(err);
});
orders.add({date: new Date().toISOString()})
.then(res => console.log(JSON.stringify(res)))
.catch(err => {
    console.log('error');
    console.log(err);
});
