module.exports = (sequelize, DataTypes) => (
  sequelize.define('cb_ipos', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    ipo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    valuation_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    valuation_currency_code: {
      type: DataTypes.STRING,
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
    public_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    stock_symbol: {
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
    tableName: 'cb_ipos',
  })
);
