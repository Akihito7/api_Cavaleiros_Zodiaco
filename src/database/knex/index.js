const knexConfigs = require("../../../knexfile");

const knex = require("knex");

const connection = knex(knexConfigs.development);

module.exports = connection;