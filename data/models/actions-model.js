const db = require("../dbConfig.js");

module.exports = {
  getActions,
  addAction,
  getActionsByProject,
};

function addAction(action) {
  return db("actions")
    .insert(action);
}

function getActions() {
  return db("actions");
}

function getActionsByProject(id) {
  return db("actions")
    .where({ project_id: id })
}
