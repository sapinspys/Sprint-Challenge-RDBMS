exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: 'at home' }, // 1
    { name: 'at work' }, // 2
    { name: 'at computer' }, // 3
  ]);
};