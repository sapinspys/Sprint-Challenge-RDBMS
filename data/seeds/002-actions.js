exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { project_id: 1, description: "Call CA DMV.", notes: "Tell them you never recieved original." }, // 1
    { project_id: 1, description: "Print out duplicate title forms.", notes: "test note" }, // 2
    { project_id: 1, description: "Fill and send forms." }, // 3
    { project_id: 2, description: "Start digging.", notes: "test note" }, // 4
    { project_id: 2, description: "Draw out entire system." }, // 5
    { project_id: 2, description: "Calculate total costs.", notes: "test note" }, // 6
    { project_id: 3, description: "Add React boilerplate." }, // 7
    { project_id: 3, description: "Add Redux boilerplate.", notes: "test note" }, // 8
    { project_id: 3, description: "Install styled components.", notes: "test note" }, // 9
  ]);
};