exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    { name: "Order van title", description: "Original lost, need duplicate." }, // 1
    {
      name: "Fix irrigation",
      description: "Leaking in multiple places, needs redesign."
    }, // 2
    { name: "Create a todo app", description: "Practice my skills with React." } // 3
  ]);
};
