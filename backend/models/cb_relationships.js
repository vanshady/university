module.exports = (sequelize, DataTypes) => (
  sequelize.define('cb_relationships', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    relationship_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    person_object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relationship_object_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    end_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    is_past: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
    },
    sequence: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
    title: {
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
    tableName: 'cb_relationships',
  })
);
