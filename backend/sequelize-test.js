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

const should = require('chai').should();
import { describe } from 'mocha';

describe('Degree -> People', () => {
  it('should return Nick Wilder', (done) => {
    Degree
      .findOne({
        where: { object_id: 'p:3262' },
        include: [{ all: true }],
      })
      .then((degree) => {
        degree.get('institution').should.equal('Haverford College');
        degree.people.get('first_name').should.equal('Nick');
        degree.people.get('last_name').should.equal('Wilder');
        degree.people.get('affiliation_name').should.equal('30Boxes');
        done();
      });
  });
});

describe('People -> Degree', () => {
  it('Nick Wilder should have two degrees', (done) => {
    People
      .findOne({
        where: { object_id: 'p:3262' },
        include: [{ all: true }],
      })
      .then((people) => {
        people.degree.should.have.length(2);
        done();
      });
  });
});

describe('Relationship -> People', () => {
  it('Nick Wilder should have worked at eight companies', (done) => {
    Relationship
      .findAll({
        where: { person_object_id: 'p:3262' },
        include: [{ all: true }],
      })
      .then((relationships) => {
        relationships.should.have.length(8);
        done();
      });
  });
});

describe('Object -> acquired', () => {
  it('Flektor should be acquired by Fox Interactive Media', (done) => {
    Object
      .findOne({
        where: { id: 'c:10' },
        include: [
          { all: true },
        ],
      })
      .then((object) => {
        object.get('name').should.equal('Flektor');
        object.acquired[0].get('name').should.equal('Fox Interactive Media');
        done();
      });
  });
});

describe('Object -> acquiring', function () {
  it('Fox Interactive Media should have acquired Flektor (around 15s)', function (done) {
    this.timeout(20000);
    Object
      .findOne({
        where: { id: 'c:11' },
        include: [
          { all: true },
        ],
      })
      .then((object) => {
        object.get('name').should.equal('Fox Interactive Media');
        object.acquiring[0].get('name').should.equal('Flektor');
        done();
      });
  });
});

describe('Object -> employee', () => {
  it('Flektor should have six employees', (done) => {
    Object
      .findOne({
        where: { id: 'c:10' },
        include: [
          { all: true },
        ],
      })
      .then((object) => {
        object.employee.should.have.length(6);
        done();
      });
  });
});

describe('Object -> employee', function () {
  it('Digg should have four funding rounds (around 80s)', function (done) {
    this.timeout(120000);
    Object
      .findOne({
        where: { id: 'c:4' },
        include: [
          { all: true },
        ],
      })
      .then((object) => {
        object.get('name').should.equal('Digg');
        object.fundinground.should.have.length(4);
        done();
      });
  });
});
