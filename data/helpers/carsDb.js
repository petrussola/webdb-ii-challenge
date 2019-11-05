const db = require("../dbConfig");

module.exports = {
  get,
  insert,
  getById
};

function get() {
  return db("cars");
}

function getById(id) {
  return db("cars")
    .where({ id })
    .first();
}

function insert(data) {
  return db("cars").insert(data);
}
