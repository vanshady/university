module.exports = (sequelize, DataTypes) => (
  sequelize.define('cb_funding_rounds', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    funding_round_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    funded_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    funding_round_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    funding_round_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    raised_amount_usd: {
      type: DataTypes.DECIMAL,
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
    pre_money_valuation_usd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    pre_money_valuation: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    pre_money_currency_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    post_money_valuation_usd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    post_money_valuation: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    post_money_currency_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    participants: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    is_first_round: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
    is_last_round: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
    source_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    source_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_by: {
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
    tableName: 'cb_funding_rounds',
  })
);
