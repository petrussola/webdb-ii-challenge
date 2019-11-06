exports.up = function(knex) {
  return knex.schema.table("cars", table => {
    // table
    //   .float("mileage")
    //   .notNullable()
    //   .alter();
    table.text("transmissionType");
    table.text("status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropColumns("transmissionType", "status");
};
