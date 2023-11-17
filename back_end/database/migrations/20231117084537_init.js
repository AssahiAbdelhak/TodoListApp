/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function(knex) {
    return knex.schema.createTable('users',(table) => {
        table.increments('id').primary();
        table.string('email');
        table.string('password');
        table.timestamps('true')
    }).createTable('todos',(table) => {
        table.increments('id').primary();
        table.string('todo');
        table.string('state').checkIn(['todo','doing','done'])
        table.timestamps('true')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    return knex.schema.dropTable('todos').dropTable('users')
};
