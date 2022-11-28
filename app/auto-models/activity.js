const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('activity', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'task',
        key: 'id'
      }
    },
    process_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'process',
        key: 'id'
      }
    },
    decision: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "approve,decline,return,submit"
    },
    decision_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(3000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'activity',
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
        name: "fk_task_id_idx",
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
      {
        name: "fk_process_id_idx",
        using: "BTREE",
        fields: [
          { name: "process_id" },
        ]
      },
    ]
  });
};
