const users = require('../users');

const then = res => console.log(res);
const catchError = error => console.log(error);

users.add({name:'someName',email:'email@mail.com',phone:'380974885047'})
.then(then)
.catch(catchError)
