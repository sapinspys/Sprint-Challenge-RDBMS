const db = require("../dbConfig.js");

module.exports = {
  addProjects,
  getProjects,
  getProject,
};

function addProjects(project) {
  return db("projects")
    .insert(project);
}

function getProjects() {
  return db("projects");
}

function getProject(id) {
  return db("projects")
    .where({ id })
    .first();
}
