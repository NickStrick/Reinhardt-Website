
const bcrypt = require('bcryptjs');
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          username: 'Reginald',
          password: bcrypt.hashSync('goodboi', 14),
          first_name: 'reginald',
          last_name: 'sonson',
          user_type: 'patron',

        },
        {
          id: 2,
          username: 'James',
          password: bcrypt.hashSync('goodboi', 14),
          first_name: 'James',
          last_name: 'McRae',
          user_type: 'patron',

        },
        {
          id: 3,
          username: 'Leland',
          password: bcrypt.hashSync('goodboi', 14),
          first_name: 'Leland',
          last_name: 'Rogers',
          user_type: 'patron',
        },
      ]);
    });
};
