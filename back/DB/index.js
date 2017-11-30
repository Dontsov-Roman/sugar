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

const errorHandler = err => {
    console.log(err);
    return {
        errorMessage:'no items'
    }
};

module.exports = {
    query:(text,params,callback) => pool.query(text,params,callback),
    handler,
    errorHandler
};
