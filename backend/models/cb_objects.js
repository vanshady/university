module.exports = (sequelize, DataTypes) => (
  sequelize.define('cb_objects', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    entity_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    entity_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    normalized_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    permalink: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'operating',
    },
    founded_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    closed_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    domain: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    homepage_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitter_username: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    logo_width: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    logo_height: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    short_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    overview: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    tag_list: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    first_investment_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_investment_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    investment_rounds: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    invested_companies: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    first_funding_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_funding_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    funding_rounds: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    funding_total_usd: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    first_milestone_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    last_milestone_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    milestones: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    relationships: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'cb_objects',
  })
);
