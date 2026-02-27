const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "library",
  password: process.env.PGPASSWORD,   // in .env
  port: 2222,
});

module.exports = pool;