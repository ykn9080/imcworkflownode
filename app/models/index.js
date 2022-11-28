const dbConfig = process.env;
const initModel = require("../auto-models/init-models");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: 0,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    underscored: true,
  },
});

let db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db = require("./misc.js")(sequelize, Sequelize, db);
const model = initModel(sequelize);

Object.keys(model).map((k, i) => {
  return (db[k] = model[k]);
});

db.sequelize.sync({ force: false, alter: false });
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

module.exports = db;
