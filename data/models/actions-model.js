const db = require("../dbConfig.js");

module.exports = {
  getActions,
  addAction,
  getAction,
  getActionsByProject
};

function addAction(action) {
  return db("actions").insert(action);
}

function getActions() {
  return db("actions");
}

function getAction(id) {
  return db("actions")
    .where({ id })
    .first();
}

function getActionsByProject(id) {
  return db("actions").where({ project_id: id });
}
