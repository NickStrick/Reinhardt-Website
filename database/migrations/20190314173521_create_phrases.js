
exports.up = function (knex, Promise) {
    return knex.schema.createTable('phrases', phrases => {
        phrases.increments();

        phrases
            .string('phrase', 255)
            .notNullable()
            .unique();
        phrases.integer('user_id').references('id').inTable('users');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('phrases');
};
