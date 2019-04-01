exports.seed = function(knex, Promise) {
  return knex('action_contexts').insert([
    { action_id: 1, context_id: 1 }, // 1
    { action_id: 2, context_id: 3 }, // 2
    { action_id: 3, context_id: 3 }, // 3
    { action_id: 4, context_id: 1 }, // 5
    { action_id: 5, context_id: 1 }, // 6
    { action_id: 6, context_id: 3 }, // 7
    { action_id: 7, context_id: 3 }, // 8
    { action_id: 8, context_id: 3 }, // 9
    { action_id: 9, context_id: 3 }, // 10
  ]);
};