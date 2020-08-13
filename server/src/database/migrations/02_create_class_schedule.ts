import knex from 'knex';

export async function  up(Knex:knex){
    return Knex.schema.createTable('class_Schedule', table =>{
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        table.integer('class_id')
        .notNullable()
        .references('id')
        .inTable('classes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    });
}

export async function down(Knex:knex){
    return Knex.schema.dropTable('class_Schedule');
}