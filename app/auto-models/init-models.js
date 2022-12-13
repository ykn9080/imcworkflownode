var DataTypes = require("sequelize").DataTypes;
var _activity = require("./activity");
var _activity_read = require("./activity_read");
var _company = require("./company");
var _division = require("./division");
var _form = require("./form");
var _form_template = require("./form_template");
var _formarchive = require("./formarchive");
var _position = require("./position");
var _process = require("./process");
var _process_template = require("./process_template");
var _task = require("./task");
var _user = require("./user");

function initModels(sequelize) {
  var activity = _activity(sequelize, DataTypes);
  var activity_read = _activity_read(sequelize, DataTypes);
  var company = _company(sequelize, DataTypes);
  var division = _division(sequelize, DataTypes);
  var form = _form(sequelize, DataTypes);
  var form_template = _form_template(sequelize, DataTypes);
  var formarchive = _formarchive(sequelize, DataTypes);
  var position = _position(sequelize, DataTypes);
  var process = _process(sequelize, DataTypes);
  var process_template = _process_template(sequelize, DataTypes);
  var task = _task(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  division.belongsTo(company, { as: "comp", foreignKey: "comp_id"});
  company.hasMany(division, { as: "divisions", foreignKey: "comp_id"});
  user.belongsTo(company, { as: "comp", foreignKey: "comp_id"});
  company.hasMany(user, { as: "users", foreignKey: "comp_id"});
  process.belongsTo(division, { as: "division", foreignKey: "division_id"});
  division.hasMany(process, { as: "processes", foreignKey: "division_id"});
  user.belongsTo(division, { as: "division", foreignKey: "division_id"});
  division.hasMany(user, { as: "users", foreignKey: "division_id"});
  process.belongsTo(position, { as: "position", foreignKey: "position_id"});
  position.hasMany(process, { as: "processes", foreignKey: "position_id"});
  user.belongsTo(position, { as: "position", foreignKey: "position_id"});
  position.hasMany(user, { as: "users", foreignKey: "position_id"});
  activity.belongsTo(process, { as: "process", foreignKey: "process_id"});
  process.hasMany(activity, { as: "activities", foreignKey: "process_id"});
  form.belongsTo(task, { as: "task", foreignKey: "task_id"});
  task.hasMany(form, { as: "forms", foreignKey: "task_id"});
  process.belongsTo(task, { as: "task", foreignKey: "task_id"});
  task.hasMany(process, { as: "processes", foreignKey: "task_id"});
  activity_read.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(activity_read, { as: "activity_reads", foreignKey: "user_id"});
  process.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(process, { as: "processes", foreignKey: "user_id"});
  task.belongsTo(user, { as: "creator", foreignKey: "creator_id"});
  user.hasMany(task, { as: "tasks", foreignKey: "creator_id"});
  user.belongsTo(user, { as: "boss", foreignKey: "boss_id"});
  user.hasMany(user, { as: "users", foreignKey: "boss_id"});

  return {
    activity,
    activity_read,
    company,
    division,
    form,
    form_template,
    formarchive,
    position,
    process,
    process_template,
    task,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
