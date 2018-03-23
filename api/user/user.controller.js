'use strict';

const User = require('./user.model');

const handleSuccessResponse = (res, message) => {
  return res.status(201).json(message);
}

const handleFailureResponse = (res, message) => {
  return res.status(501).json(message);
}

const loadSampleData = () => {
  let user1 = {id: 1, firstname:"Roger", lastname: "Fedrer"};
  let user2 = {id: 2, firstname:"Rafael", lastname:"Nadal"};
  let users = [user1, user2];
  return users;
}


function UserController() {
  this.users = null;

  this.init = () => {
    console.log('Initialize user object and hydrate it with some sample data');
    this.users = loadSampleData();
  };

  this.showAll = (req, res) => {
    console.log('ShowAll users invoked');
    if(this.users == null) {
      this.init();
    }
    return handleSuccessResponse(res, this.users);
  };

  this.show = (req, res) => {
    console.log('Show users invoked');
    const { id } = req.params;

    if(this.users == null) {
      this.init();
    }

    let user = this.users.filter((user) => {
      return user.id == id;
    });

    if(user.length > 0) {
      return handleSuccessResponse(res, user[0]);
    }
    return handleSuccessResponse(res, {});

  };

  this.add = (req, res) => {
    console.log('Add user invoked');
    /**
     * Validate and handle request
     */
    const {firstname, lastname, dob} = req.body;
    const inputuser = {firstname: firstname, lastname: lastname, dob: dob};
    const errors = User.validate(inputuser)
    if(errors.length > 0) {
      let errors_json = errors.map((error) => {
        return { path: error.path, message: error.message};
      });
      const errorResponse = {errors: errors_json};
      handleFailureResponse(res, errorResponse);
    } else {
      handleSuccessResponse(res, {message: `user ${firstname} ${lastname} saved`});
    }

  };

  this.remove = (req, res) => {
    console.log('Remove user invoked');
    /**
     * Validate and delete user
     */
  };

  this.health = (req, res) => {
    console.log('Health endpoint invoked');
    return handleSuccessResponse(res, {message: "All is well with User service. Thanks for checking."});
  };
}

module.exports = UserController;