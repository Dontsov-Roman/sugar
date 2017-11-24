const Pool = require('pg').Pool;
const config = require('./config.json');
    // Client  = require('pg').Client;
const pool = new Pool(config);
pool.query('SELECT * from clients').then(res=>{console.log(res);});
// pool.end();