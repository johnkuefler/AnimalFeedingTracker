const Medicine = require('../models/medicine');

exports.get_index = function(req, res) {
  Medicine.find({}, function(err, foods) {
    if (err) {
      // handle error
    } else {
      res.render('settings/medicines/index', {data: foods});
    }
  });
};

exports.get_create = function(req, res) {
  res.render('settings/medicines/create');
};

exports.post_create = function(req, res) {
  const newMed = new Medicine({
    name: req.body.name,
  });

  newMed.save(function(err) {
    if (err) {
      console.error(err);
    } else {
      res.redirect('/settings/medicines');
    }
  });
};

exports.get_update = function(req, res) {
  Medicine.findOne({_id: req.query.id}, function(err, food) {
    if (err) {
      // handle error
    } else {
      res.render('settings/medicines/update', {data: food});
    }
  });
};

exports.post_update = function(req, res) {
  const updateData = {
    name: req.body.name,
  };

  Medicine.findOneAndUpdate({_id: req.body.id},
      updateData, function(err, data) {
        if (err) {
          // handle error
          console.log(err);
        } else {
          res.redirect('/settings/medicines');
        }
      });
};

exports.get_delete = function(req, res) {
  Medicine.findOneAndDelete({_id: req.query.id}, function(err) {
    if (err) {
      // handle error
      console.log(err);
    } else {
      res.redirect('/settings/medicines');
    }
  });
};
