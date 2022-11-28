const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('form_template', {
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
    desc: {
      type: DataTypes.STRING(3000),
      allowNull: true
    },
    writer_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATE,
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
    process_template_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_open: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'form_template',
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
