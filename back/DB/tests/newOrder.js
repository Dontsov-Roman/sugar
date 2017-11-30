const newOrder = require('../newOrder');
const email = 'email@mail.com';
const name = 'new Client';
const date = new Date().toISOString();
const phone = '380974885047';
const prices = [1,3];

newOrder({
    email,
    date,
    phone,
    name,
    prices
})
.then(res => console.log(res))
.catch(error => {
    console.log('=====================ERROR==============================');
    console.log(error);
})
