import knex from 'knex';

export async function  up(Knex:knex){
    return Knex.schema.createTable('classes', table =>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.string('cost').notNullable();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    });
}

export async function down(Knex:knex){
    return Knex.schema.dropTable('classes');
}