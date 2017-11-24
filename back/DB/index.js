const Pool = require('pg').Pool;
const config = require('./config.json');
const pool = new Pool(config);

module.exports = {
    query:(text,params,callback) => pool.query(text,params,callback)
};