module.exports = (sequelize, DataTypes) => (
  sequelize.define('cb_milestones', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    milestone_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    milestone_code: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
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
    tableName: 'cb_milestones',
  })
);
