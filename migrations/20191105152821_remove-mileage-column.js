exports.up = function(knex) {
  return knex.schema.table("cars", table => {
    table.dropColumn("mileage");
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", table => {
    table.float("mileage");
  });
};
