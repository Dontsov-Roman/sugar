const Pool = require('pg').Pool;
const config = require('./config.json');
const pool = new Pool(config);

const handler = res => {
    return new Promise( (resolve, reject) => {
        if(res && res.rows && res.rows.length){
            resolve(res.rows);
        } else {
            reject(res);
        }
    })
};

const handlerFirst = res => (res.rows && res.rows.length)?res.rows[0]:undefined
const errorHandlerFirst = () => undefined;

const errorHandler = err => {
    console.log(err);
    return {
        errorMessage:'no items'
    }
};

module.exports = {
    query:(text,params,callback) => pool.query(text,params,callback),
    pool,
    handler,
    handlerFirst,
    errorHandler,
    errorHandlerFirst
};
