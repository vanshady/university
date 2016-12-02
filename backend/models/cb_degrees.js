module.exports = (sequelize, DataTypes) => (
  sequelize.define('cb_degrees', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    degree_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    graduated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'cb_degrees',
  })
);
