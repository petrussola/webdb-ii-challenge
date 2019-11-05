exports.up = function(knex) {
  return knex.schema.table("cars", table => {
    table
      .float("mileage")
      .defaultTo(0)
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", table => {
    table.dropColumn("mileage");
  });
};
