const Food = require('../models/food');

exports.get_index = function(req, res) {
  Food.find({}, function(err, foods) {
    if (err) {
      // handle error
    } else {
      res.render('settings/foods/index', {data: foods});
    }
  });
};

exports.get_create = function(req, res) {
  res.render('settings/foods/create');
};

exports.post_create = function(req, res) {
  const newFood = new Food({
    name: req.body.name,
  });

  newFood.save(function(err) {
    if (err) {
      console.error(err);
    } else {
      res.redirect('/settings/foods');
    }
  });
};

exports.get_update = function(req, res) {
  Food.findOne({_id: req.query.id}, function(err, food) {
    if (err) {
      // handle error
    } else {
      res.render('settings/foods/update', {data: food});
    }
  });
};

exports.post_update = function(req, res) {
  const updateData = {
    name: req.body.name,
  };

  Food.findOneAndUpdate({_id: req.body.id}, updateData, function(err, data) {
    if (err) {
      // handle error
      console.log(err);
    } else {
      res.redirect('/settings/foods');
    }
  });
};

exports.get_delete = function(req, res) {
  Food.findOneAndDelete({_id: req.query.id}, function(err) {
    if (err) {
      // handle error
      console.log(err);
    } else {
      res.redirect('/settings/foods');
    }
  });
};
