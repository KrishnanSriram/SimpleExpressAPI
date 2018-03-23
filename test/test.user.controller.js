'use strict';

const fs = require('fs');
let chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
let chaiHttp = require('chai-http');
let should = chai.should();
const UserController = require('./../api/user/user.controller');
const usercontroller = new UserController();
let server = require('./../app');
chai.use(chaiHttp);

describe('index', () => {
  it('index should be a function', () => {
    expect(usercontroller.showAll).to.be.a('function');
  });
});


describe('show', () => {
  it('show should be a function', () => {
    expect(usercontroller.show).to.be.a('function');
  });
});

//addIncident
describe('add', () => {
  it('add should be a function', () => {
    expect(usercontroller.add).to.be.a('function');
  });
});
//getIncident
describe('remove', () => {
  it('remove should be a function', () => {
    expect(usercontroller.remove).to.be.a('function');
  });
});
//addInsuredVehicle
describe('health', () => {
  it('health should be a function', () => {
    expect(usercontroller.health).to.be.a('function');
  });
});

/*
  * Test the /GET route
  */
describe('/GET user with ID', () => {
  it('it should GET a user', (done) => {
    chai.request(server)
      .get('/api/v1/user/1')
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body).to.have.property('id');
        expect(res.body.id).to.equal(1);
        expect(res.body).to.have.property('firstname');
        expect(res.body.firstname).to.equal("Roger");
        expect(res.body).to.have.property('lastname');
        expect(res.body.lastname).to.equal("Fedrer");
        done();
      });
  });
});

/*
  * Test the /GET route
  */
describe('/GET user', () => {
  it('it should GET all users', (done) => {
    chai.request(server)
      .get('/api/v1/user')
      .end((err, res) => {
        res.should.have.status(201);
        console.log(res.body);
        res.body.should.be.a('array');
        res.body.length.should.be.eql(2);
        done();
      });
  });
});

describe('/POST user', () => {
  it('it should POST a user', (done) => {
    const user = { firstname: 'Sam', lastname: "Anderson", dob:"03/03/1970"};
    chai.request(server)
      .post('/api/v1/user')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        expect(res.body).to.have.property('message');
        expect(res.body.message).to.equal("user Sam Anderson saved");
        done();
      });
  });
});

describe('/POST user', () => {
  it('it should not POST a user', (done) => {
    const user = { lastname: "Anderson", dob:"03/03/1970"};
    chai.request(server)
      .post('/api/v1/user')
      .send(user)
      .end((err, res) => {
        res.should.have.status(501);
        res.body.should.be.a('object');
        expect(res.body).to.have.property('errors');
        done();
      });
  });

});

/*
  * Test the /GET route for invalid request
  */
describe('/GET 404 check', () => {
  it('it should give 404 error', (done) => {
    chai.request(server)
      .get('/api/v1/user1')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});
