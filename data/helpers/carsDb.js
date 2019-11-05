const db = require("../dbConfig");

module.exports = {
  get,
  insert,
  getById,
  remove,
  update
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

function remove(id) {
  return db("cars")
    .where("id", id)
    .del();
}

function update(id, changes) {
  return db("cars")
    .where("id", id)
    .update(changes);
}
