const Pool = require('pg').Pool;
const env = require('dotenv').config();

const db_port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_server = process.env.DB_SERVER;


const pool = new Pool({
  host: `${db_server}`,
  user: `${db_user}`,
  password: `${db_password}`,
  database: `${db_name}`,
  port: db_port,
})

module.exports = {
  pool,
}
