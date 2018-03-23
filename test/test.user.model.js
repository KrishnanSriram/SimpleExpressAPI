'use strict';

const fs = require('fs');
let chai = require('chai');
const expect = chai.expect;
const sinon = require("sinon");
let chaiHttp = require('chai-http');
let should = chai.should();
const UserModel = require('./../api/user/user.model');
let server = require('./../app');

describe('valid user', () => {
  it('A valid user object check', () => {
    const user = { firstname: 'Sam', lastname: "Anderson", dob:"03/03/1970"};
    const errors = UserModel.validate(user);
    expect(errors).to.be.empty;
  });
});

describe('Invalid user - missing first name', () => {
  it('A valid user object check', () => {
    const user = { lastname: "Anderson", dob:"03/03/1970"};
    const errors = UserModel.validate(user);
    expect(errors).to.have.lengthOf(1);
    expect(errors[0]).to.have.property('path');
    expect(errors[0].path).to.equal("firstname");
    expect(errors[0]).to.have.property('message');
    expect(errors[0].message).to.equal("firstname is required.");
  });
});

describe('Invalid user - first name length check for MIN', () => {
  it('A valid user object check', () => {
    const user = { firstname:"y", lastname: "Anderson", dob:"03/03/1970"};
    const errors = UserModel.validate(user);
    expect(errors).to.have.lengthOf(1);
    expect(errors[0]).to.have.property('path');
    expect(errors[0].path).to.equal("firstname");
    expect(errors[0]).to.have.property('message');
    expect(errors[0].message).to.equal("firstname must have a length between 3 and 32.");
  });
});

describe('Invalid user - first name length check for MAX', () => {
  it('A valid user object check', () => {
    const user = { firstname: "asdjkfnasldk asdfkjnasdfnasdfkljasdnf", lastname: "Anderson", dob:"03/03/1970"};
    const errors = UserModel.validate(user);
    expect(errors).to.have.lengthOf(1);
    expect(errors[0]).to.have.property('path');
    expect(errors[0].path).to.equal("firstname");
    expect(errors[0]).to.have.property('message');
    expect(errors[0].message).to.equal("firstname must have a length between 3 and 32.");
  });
});

describe('Invalid user - missing last name', () => {
  it('A valid user object check', () => {
    const user = { firstname: 'Sam', dob:"03/03/1970"};
    const errors = UserModel.validate(user);
    expect(errors).to.have.lengthOf(1);
    expect(errors[0]).to.have.property('path');
    expect(errors[0].path).to.equal("lastname");
    expect(errors[0]).to.have.property('message');
    expect(errors[0].message).to.equal("lastname is required.");
  });
});

describe('Invalid user - missing dob', () => {
  it('A valid user object check', () => {
    const user = { firstname: 'Sam', lastname: "Anderson"};
    const errors = UserModel.validate(user);
    expect(errors).to.have.lengthOf(1);
    expect(errors[0]).to.have.property('path');
    expect(errors[0].path).to.equal("dob");
    expect(errors[0]).to.have.property('message');
    expect(errors[0].message).to.equal("dob is required.");
  });
});