import { resolver, attributeFields, defaultArgs } from 'graphql-sequelize';

import {
  GraphQLObjectType,
  // GraphQLString,
  // GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  // GraphQLNonNull,
} from 'graphql';

import {
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
} from './db';

const _ = require('lodash');

// Acquisition
const AcquisitionType = new GraphQLObjectType({
  name: 'Acquisition',
  fields: _.assign(attributeFields(Acquisition)),
});

// Degree
const DegreePeopleType = new GraphQLObjectType({
  name: 'DegreePeople',
  fields: _.assign(attributeFields(People)),
});

const DegreeType = new GraphQLObjectType({
  name: 'Degree',
  fields: _.assign(attributeFields(Degree), {
    people: {
      type: new GraphQLList(DegreePeopleType),
      resolve: resolver(Degree.People),
    },
  }),
});

// FundingRound
const FundingRoundType = new GraphQLObjectType({
  name: 'FundingRound',
  fields: _.assign(attributeFields(FundingRound)),
});

// Fund
const FundMilestoneType = new GraphQLObjectType({
  name: 'FundMilestone',
  fields: _.assign(attributeFields(Milestone)),
});

const FundInvestmentType = new GraphQLObjectType({
  name: 'FundInvestment',
  fields: _.assign(attributeFields(Investment)),
});

const FundType = new GraphQLObjectType({
  name: 'Fund',
  fields: _.assign(attributeFields(Fund), {
    milestone: {
      type: new GraphQLList(FundMilestoneType),
      resolve: resolver(Fund.Milestone),
    },
    investment: {
      type: new GraphQLList(FundInvestmentType),
      resolve: resolver(Fund.Investment),
    },
  }),
});

// Investment
const InvestmentType = new GraphQLObjectType({
  name: 'Investment',
  fields: _.assign(attributeFields(Investment)),
});

// IPO
const IPOType = new GraphQLObjectType({
  name: 'IPO',
  fields: _.assign(attributeFields(IPO)),
});

// Milestone
const MilestoneType = new GraphQLObjectType({
  name: 'Milestone',
  fields: _.assign(attributeFields(Milestone)),
});

// Office
const OfficeObjectType = new GraphQLObjectType({
  name: 'OfficeObject',
  fields: _.assign(attributeFields(Object)),
});

const OfficeType = new GraphQLObjectType({
  name: 'Office',
  fields: _.assign(attributeFields(Office), {
    object: {
      type: new GraphQLList(OfficeObjectType),
      resolve: resolver(Office.Object),
    },
  }),
});

// Object
const ObjectAcquiredType = new GraphQLObjectType({
  name: 'ObjectAcquired',
  fields: _.assign(attributeFields(Object)),
});

const ObjectAcquiringType = new GraphQLObjectType({
  name: 'ObjectAcquire',
  fields: _.assign(attributeFields(Object)),
});

const ObjectEmployeeType = new GraphQLObjectType({
  name: 'ObjectEmployee',
  fields: _.assign(attributeFields(People)),
});

const ObjectFundingRoundType = new GraphQLObjectType({
  name: 'ObjectFundingRound',
  fields: _.assign(attributeFields(FundingRound)),
});

const ObjectInvestmentType = new GraphQLObjectType({
  name: 'ObjectInvestment',
  fields: _.assign(attributeFields(Fund)),
});

const ObjectIPOType = new GraphQLObjectType({
  name: 'ObjectIPO',
  fields: _.assign(attributeFields(IPO)),
});

const ObjectMilestoneType = new GraphQLObjectType({
  name: 'ObjectMilestone',
  fields: _.assign(attributeFields(Milestone)),
});

const ObjectOfficeType = new GraphQLObjectType({
  name: 'ObjectOffice',
  fields: _.assign(attributeFields(Office)),
});

const ObjectParentType = new GraphQLObjectType({
  name: 'ObjectParent',
  fields: _.assign(attributeFields(Object)),
});

const ObjectRelationshipType = new GraphQLObjectType({
  name: 'ObjectRelationship',
  fields: _.assign(attributeFields(Relationship)),
});

const ObjectType = new GraphQLObjectType({
  name: 'Object',
  fields: _.assign(attributeFields(Object), {
    acquired: {
      type: new GraphQLList(ObjectAcquiredType),
      resolve: resolver(Object.Acquired),
    },
    acquiring: {
      type: new GraphQLList(ObjectAcquiringType),
      resolve: resolver(Object.Acquiring),
    },
    employee: {
      type: new GraphQLList(ObjectEmployeeType),
      resolve: resolver(Object.Employee),
    },
    fundinground: {
      type: new GraphQLList(ObjectFundingRoundType),
      resolve: resolver(Object.FundingRound),
    },
    investment: {
      type: new GraphQLList(ObjectInvestmentType),
      resolve: resolver(Object.Investment),
    },
    IPO: {
      type: new GraphQLList(ObjectIPOType),
      resolve: resolver(Object.IPO),
    },
    milestone: {
      type: new GraphQLList(ObjectMilestoneType),
      resolve: resolver(Object.Milestone),
    },
    office: {
      type: new GraphQLList(ObjectOfficeType),
      resolve: resolver(Object.Office),
    },
    parent: {
      type: new GraphQLList(ObjectParentType),
      resolve: resolver(Object.Parent),
    },
    relationship: {
      type: new GraphQLList(ObjectRelationshipType),
      resolve: resolver(Object.Relationship),
    },
  }),
});

// People
const PeopleCompanyType = new GraphQLObjectType({
  name: 'PeopleCompany',
  fields: _.assign(attributeFields(Object)),
});

const PeopleDegreeType = new GraphQLObjectType({
  name: 'PeopleDegree',
  fields: _.assign(attributeFields(Degree)),
});

const PeopleRelationshipType = new GraphQLObjectType({
  name: 'PeopleRelationship',
  fields: _.assign(attributeFields(Relationship)),
});

const PeopleType = new GraphQLObjectType({
  name: 'People',
  fields: _.assign(attributeFields(People), {
    company: {
      type: new GraphQLList(PeopleCompanyType),
      resolve: resolver(People.Company),
    },
    degree: {
      type: new GraphQLList(PeopleDegreeType),
      resolve: resolver(People.Degree),
    },
    milestone: {
      type: new GraphQLList(MilestoneType),
      resolve: resolver(People.Milestone),
    },
    relationship: {
      type: new GraphQLList(PeopleRelationshipType),
      resolve: resolver(People.Relationship),
    },
  }),
});

// Relationship
const RelationshipObjectType = new GraphQLObjectType({
  name: 'RelationshipObject',
  fields: _.assign(attributeFields(Object)),
});

const RelationshipPeopleType = new GraphQLObjectType({
  name: 'RelationshipPeople',
  fields: _.assign(attributeFields(People)),
});

const RelationshipType = new GraphQLObjectType({
  name: 'Relationship',
  fields: _.assign(attributeFields(Relationship), {
    object: {
      type: new GraphQLList(RelationshipObjectType),
      resolve: resolver(Relationship.Object),
    },
    people: {
      type: new GraphQLList(RelationshipPeopleType),
      resolve: resolver(Relationship.People),
    },
  }),
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      acquisition: {
        type: new GraphQLList(AcquisitionType),
        args: defaultArgs(Acquisition),
        resolve: resolver(Acquisition),
      },
      degree: {
        type: new GraphQLList(DegreeType),
        args: defaultArgs(Degree),
        resolve: resolver(Degree),
      },
      fundingRound: {
        type: new GraphQLList(FundingRoundType),
        args: defaultArgs(FundingRound),
        resolve: resolver(FundingRound),
      },
      fund: {
        type: new GraphQLList(FundType),
        args: defaultArgs(Fund),
        resolve: resolver(Fund),
      },
      investment: {
        type: new GraphQLList(InvestmentType),
        args: defaultArgs(Investment),
        resolve: resolver(Investment),
      },
      IPO: {
        type: new GraphQLList(IPOType),
        args: defaultArgs(IPO),
        resolve: resolver(IPO),
      },
      milestone: {
        type: new GraphQLList(MilestoneType),
        args: defaultArgs(Milestone),
        resolve: resolver(Milestone),
      },
      object: {
        type: new GraphQLList(ObjectType),
        args: defaultArgs(Object),
        resolve: resolver(Object),
      },
      office: {
        type: new GraphQLList(OfficeType),
        args: defaultArgs(Office),
        resolve: resolver(Office),
      },
      people: {
        type: new GraphQLList(PeopleType),
        args: defaultArgs(People),
        resolve: resolver(People),
      },
      relationship: {
        type: new GraphQLList(RelationshipType),
        args: defaultArgs(Relationship),
        resolve: resolver(Relationship),
      },
    },
  }),
});

module.exports = schema;
