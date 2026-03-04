const { Pool } = require("pg");

let pool;

if (process.env.DATABASE_URL) {
  // Production (Render)
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  
  // Local development
  pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "library",
    password: process.env.PGPASSWORD,
    port: 2222,
  });
}

module.exports = pool;