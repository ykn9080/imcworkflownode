const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    desc: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    creator_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "pending, submitted,complete_reject, complete_approve"
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'task',
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
        name: "fk_task_user1_idx",
        using: "BTREE",
        fields: [
          { name: "creator_id" },
        ]
      },
    ]
  });
};
