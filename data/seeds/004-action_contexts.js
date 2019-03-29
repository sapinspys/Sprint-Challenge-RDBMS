exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients').insert([
    { action_id: 1, context_id: 1 }, // 1
    { action_id: 1, context_id: 2 }, // 2
    { action_id: 5, context_id: 1 }, // 3
    { action_id: 5, context_id: 3 }, // 5
    { action_id: 7, context_id: 1 }, // 6
    { action_id: 7, context_id: 2 }, // 7
    { action_id: 10, context_id: 1 }, // 8
    { action_id: 10, context_id: 2 }, // 9
    { action_id: 10, context_id: 3 }, // 10
    { action_id: 10, context_id: 4 }, // 11
  ]);
};