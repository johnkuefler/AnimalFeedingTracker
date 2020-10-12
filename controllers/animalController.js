const Animal = require('../models/animal');

exports.get_index = function(req, res) {
  Animal.find({}, function(err, animals) {
    if (err) {
      // handle error
    } else {
      console.log(animals);
      res.render('settings/animals/index', {data: animals});
    }
  });
};

exports.get_create = function(req, res) {
  res.render('settings/animals/create');
};

exports.post_create = function(req, res) {
  let enabled = false;
  if (req.body.enabled == 'on') {
    enabled = true;
  }

  const newAnimal = new Animal({
    species: req.body.species,
    nickName: req.body.nickName,
    enabled: enabled,
  });

  newAnimal.save(function(err) {
    if (err) {
      console.error(err);
    } else {
      res.redirect('/settings/animals');
    }
  });
};

exports.get_update = function(req, res) {
  Animal.findOne({_id: req.query.id}, function(err, animal) {
    if (err) {
      // handle error
    } else {
      console.log(animal);
      res.render('settings/animals/update', {data: animal});
    }
  });
};

exports.post_update = function(req, res) {
  let enabled = false;
  if (req.body.enabled == 'on') {
    enabled = true;
  }

  const updateData = {
    enabled: enabled,
    nickName: req.body.nickName,
    species: req.body.species,
  };

  Animal.findOneAndUpdate({_id: req.body.id}, updateData, function(err, data) {
    if (err) {
      // handle error
      console.log(err);
    } else {
      res.redirect('/settings/animals');
    }
  });
};

exports.get_delete = function(req, res) {
  Animal.findOneAndDelete({_id: req.query.id}, function(err) {
    if (err) {
      // handle error
      console.log(err);
    } else {
      res.redirect('/settings/animals');
    }
  });
};
