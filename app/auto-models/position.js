const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('position', {
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
    is_relative: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0,
      comment: "1:boss, boss_of_boss\n"
    }
  }, {
    sequelize,
    tableName: 'position',
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
    ]
  });
};
