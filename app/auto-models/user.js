const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
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
    emp_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    comp_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    division_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'division',
        key: 'id'
      }
    },
    position_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'position',
        key: 'id'
      }
    },
    boss_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    is_head: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "부서장여부"
    }
  }, {
    sequelize,
    tableName: 'user',
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
        name: "division_fk_idx",
        using: "BTREE",
        fields: [
          { name: "division_id" },
        ]
      },
      {
        name: "company_fk_idx",
        using: "BTREE",
        fields: [
          { name: "comp_id" },
        ]
      },
      {
        name: "position_fk_idx",
        using: "BTREE",
        fields: [
          { name: "position_id" },
        ]
      },
      {
        name: "boss_fk_idx",
        using: "BTREE",
        fields: [
          { name: "boss_id" },
        ]
      },
    ]
  });
};
