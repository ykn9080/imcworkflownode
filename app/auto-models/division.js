const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('division', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    dvname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    pid: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    comp_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'company',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'division',
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
        name: "fk_division_company",
        using: "BTREE",
        fields: [
          { name: "comp_id" },
        ]
      },
    ]
  });
};
