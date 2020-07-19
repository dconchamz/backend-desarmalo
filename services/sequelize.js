require('dotenv').config();
const { getSequelizeModels } = require('api-base-desarmalo');

const sequelizeClient = getSequelizeModels(process.env.DATABASE_URL, false);

module.exports = sequelizeClient;
