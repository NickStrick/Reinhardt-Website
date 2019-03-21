
const bcrypt = require('bcryptjs');
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('phrases').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('phrases').insert([
        {
          id: 1,
          phrase: 'catchPhrase!!!',
          user_id: 1,
        },

      ]);
    });
};
