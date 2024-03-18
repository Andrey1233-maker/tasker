import { Sequelize } from "sequelize";
require("dotenv").config();

let pool: Sequelize = null;

export const dataSource = () => {
  if (pool) {
    return pool;
  }

  pool = new Sequelize(
    process.env["DB_NAME"],
    process.env["DB_USER"],
    process.env["DB_PASS"],
    {
        host: process.env["DB_HOST"],
        dialect: 'postgres',
        port: 6432,
        logging: console.log,
    },
  );
  return pool;
};

export const connect = async () => {
    const pool = dataSource();
    try {
        await pool.authenticate();
        console.log('DB connected')
    } catch (e) {
        console.log(`DB not connected: ${e.message}`)
    }
}