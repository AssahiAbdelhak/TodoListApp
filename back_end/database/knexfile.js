// Update with your config settings.
import dotenv from 'dotenv'
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

dotenv.config({path : './.env'})

export default {
  development: {
    client: process.env.CLIENT,
    connection: {
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      port: process.env.DATABASE_PORT,
    },
    migrations: {
      directory: './database/migrations' 
    }
  },
};
