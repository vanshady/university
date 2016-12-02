const Sequelize = require('sequelize');

const path = require('path');

// Setting up the config
const config = require('./config');

const sequelize = new Sequelize(config.database,
  config.username,
  config.password,
  config.options
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }, (err) => {
    console.log('Unable to connect to the database:', err);
  });

// Models
const Acquisition = sequelize.import(path.join(__dirname, '/models/cb_acquisitions'));
const Degree = sequelize.import(path.join(__dirname, '/models/cb_degrees'));
const FundingRound = sequelize.import(path.join(__dirname, '/models/cb_funding_rounds'));
const Fund = sequelize.import(path.join(__dirname, '/models/cb_funds'));
const Investment = sequelize.import(path.join(__dirname, '/models/cb_investments'));
const IPO = sequelize.import(path.join(__dirname, '/models/cb_ipos'));
const Milestone = sequelize.import(path.join(__dirname, '/models/cb_milestones'));
const Object = sequelize.import(path.join(__dirname, '/models/cb_objects'));
const Office = sequelize.import(path.join(__dirname, '/models/cb_offices'));
const People = sequelize.import(path.join(__dirname, '/models/cb_people'));
const Relationship = sequelize.import(path.join(__dirname, '/models/cb_relationships'));

// Degree
Degree.People = Degree.belongsTo(People, {
  as: 'people',
  foreignKey: 'object_id',
});

// Fund
Fund.Milestone = Fund.hasMany(Milestone, {
  as: 'milestone',
  foreignKey: 'object_id',
});

Fund.Investment = Fund.belongsToMany(Object, {
  as: 'investment',
  through: {
    model: Investment,
    unique: false,
  },
  foreignKey: 'investor_object_id',
  otherKey: 'funded_object_id',
});

// Object
Object.Acquired = Object.belongsToMany(Object, {
  as: 'acquired',
  through: {
    model: Acquisition,
    unique: false,
  },
  foreignKey: 'acquired_object_id',
  // otherKey: 'acquiring_object_id',
});

Object.Acquiring = Object.belongsToMany(Object, {
  as: 'acquiring',
  through: {
    model: Acquisition,
    unique: false,
  },
  foreignKey: 'acquiring_object_id',
  // otherKey: 'acquiried_object_id',
});

Object.Employee = Object.belongsToMany(People, {
  as: 'employee',
  through: {
    model: Relationship,
    unique: false,
  },
  foreignKey: 'relationship_object_id',
  otherKey: 'person_object_id',
});

Object.FundingRound = Object.hasMany(FundingRound, {
  as: 'fundinground',
  foreignKey: 'object_id',
});

Object.Investment = Object.belongsToMany(Fund, {
  as: 'funded',
  through: {
    model: Investment,
    unique: false,
  },
  foreignKey: 'funded_object_id',
  otherKey: 'investor_object_id',
});

Object.IPO = Object.hasMany(IPO, {
  as: 'IPO',
  foreignKey: 'object_id',
});

Object.Milestone = Object.hasMany(Milestone, {
  as: 'milestone',
  foreignKey: 'object_id',
});

Object.Office = Object.hasMany(Office, {
  as: 'office',
  foreignKey: 'object_id',
});

Object.Parent = Object.hasOne(Object, {
  as: 'parent',
  foreignKey: 'parent_id',
});

Object.Relationship = Object.hasMany(Relationship, {
  as: 'relationship',
  foreignKey: 'relationship_object_id',
});

// Office
Office.Object = Office.belongsTo(Object, {
  as: 'object',
  foreignKey: 'object_id',
});

// People
People.Company = People.belongsToMany(Object, {
  as: 'company',
  through: {
    model: Relationship,
    unique: false,
  },
  foreignKey: 'person_object_id',
  otherKey: 'relationship_object_id',
});

People.Degree = People.hasMany(Degree, {
  as: 'degree',
  foreignKey: 'object_id',
});

People.Milestone = People.hasMany(Milestone, {
  as: 'milestone',
  foreignKey: 'object_id',
});

People.Relationship = People.hasMany(Relationship, {
  as: 'relationship',
  foreignKey: 'person_object_id',
});

// Relationship
Relationship.Object = Relationship.belongsTo(Object, {
  as: 'object',
  foreignKey: 'relationship_object_id',
});

Relationship.People = Relationship.belongsTo(People, {
  as: 'people',
  foreignKey: 'person_object_id',
});

module.exports = {
  Acquisition,
  Degree,
  FundingRound,
  Fund,
  Investment,
  IPO,
  Milestone,
  Object,
  Office,
  People,
  Relationship,
};
