module.exports = (sequelize, DataTypes) => (
  sequelize.define('cb_funds', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    fund_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    funded_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    raised_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    raised_currency_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    source_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    source_description: {
      type: DataTypes.STRING,
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
    tableName: 'cb_funds',
  })
);
