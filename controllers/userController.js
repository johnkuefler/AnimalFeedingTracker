const User = require('../models/user');

exports.get_index = function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      // handle error
    } else {
      res.render('settings/users/index', {data: users});
    }
  });
};

exports.get_create = function(req, res) {
  res.render('settings/users/create', {message: req.flash('signupMessage')});
};

exports.post_create = function(req, res) {
  const newUser = new User();

  // set the user's local credentials
  newUser.email = req.body.email;
  newUser.password = newUser.generateHash(req.body.password);
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.role = req.body.role;

  // save the user
  newUser.save(function(err) {
    if (err) {
      throw err;
    }
    res.redirect('/settings/users');
  });
};

exports.get_update = function(req, res) {
  User.findOne({_id: req.query.id}, function(err, user) {
    if (err) {
      // handle error
    } else {
      res.render('settings/users/update', {data: user, message: req.flash('signupMessage')});
    }
  });
};

exports.post_update = function(req, res) {
  const updateData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role: req.body.role,
  };
  if (req.body.password) {
    updateData.password = User.generateHash(req.body.password);
  }

  User.findOneAndUpdate({_id: req.body.id}, updateData, function(err, data) {
    if (err) {
      // handle error
      console.log(err);
    } else {
      res.redirect('/settings/users');
    }
  });
};

exports.get_delete = function(req, res) {
  User.findOneAndDelete({_id: req.query.id}, function(err) {
    if (err) {
      // handle error
      console.log(err);
    } else {
      res.redirect('/settings/users');
    }
  });
};
