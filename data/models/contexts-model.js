const db = require("../dbConfig.js");

module.exports = {
  getContextsByAction,
};

function getContextsByAction(id) {
  return db("action_contexts")
    .where({ action_id: id })
}