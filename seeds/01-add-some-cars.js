
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: "abc123", make: 'toyota', model: 'corolla', mileage: 15},
        {vin: "xyz321", make: 'ford', model: 'focus', mileage: 22},
        {vin: "lol987", make: 'ferrari', model: 'testarossa', mileage: 27}
      ]);
    });
};
