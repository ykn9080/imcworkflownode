const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    form_type: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    html: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'task',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'form',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_task_form1_idx",
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
    ]
  });
};
