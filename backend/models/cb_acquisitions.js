module.exports = (sequelize, DataTypes) => (
  sequelize.define('cb_acquisitions', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    acquisition_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    acquiring_object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    acquired_object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    term_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price_amount: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    price_currency_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    acquired_at: {
      type: DataTypes.DATE,
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
    tableName: 'cb_acquisitions',
  })
);
