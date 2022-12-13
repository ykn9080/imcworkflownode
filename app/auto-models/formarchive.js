const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formarchive', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    form_type: {
      type: DataTypes.STRING(45),
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
    created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    descript: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    writer_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_open: {
      type: DataTypes.TINYINT,
      allowNull: true,
      comment: "1:전사에 공통 사용\n0: 자신만 사용"
    }
  }, {
    sequelize,
    tableName: 'formarchive',
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
