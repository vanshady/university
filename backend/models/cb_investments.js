module.exports = (sequelize, DataTypes) => (
  sequelize.define('cb_investments', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    funding_round_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    funded_object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    investor_object_id: {
      type: DataTypes.STRING,
      allowNull: false,
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
    tableName: 'cb_investments',
  })
);
