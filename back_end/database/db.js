import knex from "knex";
import knexfile from "./knexfile.js";

const db = knex(knexfile.development)

await db.migrate.latest()
    //.then(() => {console.log('Database migration successful');})
    //.catch((error) => {console.error('Database migration failed:', error);});

export default db;