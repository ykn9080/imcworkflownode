const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('process', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    seq: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    process_method: {
      type: DataTypes.STRING(45),
      allowNull: true,
      comment: "결재,협의,재무협의,참조,회람"
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    division_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    position_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    task_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'task',
        key: 'id'
      }
    },
    template_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'process',
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
        name: "fk_process_task1_idx",
        using: "BTREE",
        fields: [
          { name: "task_id" },
        ]
      },
      {
        name: "fk_process_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
