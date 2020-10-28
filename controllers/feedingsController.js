const Feeding = require('../models/feeding');
const Animal = require('../models/animal');
const Food = require('../models/food');
const Medicine = require('../models/medicine');

exports.get_index = function(req, res) {
  Feeding.find({}, function(err, feedings) {
    if (err) {
      // handle error
    } else {
      res.render('feedings/index', {data: feedings});
    }
  });
};

exports.get_create = async function(req, res) {
  const animals = await Animal.find({});
  const foods = await Food.find({});
  const medicines = await Medicine.find({});

  console.log(foods);

  res.render('feedings/create',
      {animals: animals, foods: foods, medicines: medicines});
};

exports.post_create = function(req, res) {
  //   let enabled = false;
  //   if (req.body.enabled == 'on') {
  //     enabled = true;
  //   }

  //   const newAnimal = new Animal({
  //     species: req.body.species,
  //     nickName: req.body.nickName,
  //     enabled: enabled,
  //   });

  //   newAnimal.save(function(err) {
  //     if (err) {
  //       console.error(err);
  //     } else {
  //       res.redirect('/settings/animals');
  //     }
  //   });
};

exports.get_update = function(req, res) {
  //   Animal.findOne({_id: req.query.id}, function(err, animal) {
  //     if (err) {
  //       // handle error
  //     } else {
  //       console.log(animal);
  //       res.render('settings/animals/update', {data: animal});
  //     }
  //   });
};

exports.post_update = function(req, res) {
  //   let enabled = false;
  //   if (req.body.enabled == 'on') {
  //     enabled = true;
  //   }

  //   const updateData = {
  //     enabled: enabled,
  //     nickName: req.body.nickName,
  //     species: req.body.species,
  //   };

  //   Animal.findOneAndUpdate({_id: req.body.id}, updateData, function(err, data) {
  //     if (err) {
  //       // handle error
  //       console.log(err);
  //     } else {
  //       res.redirect('/settings/animals');
  //     }
  //   });
};

exports.get_delete = function(req, res) {
  Feeding.findOneAndDelete({_id: req.query.id}, function(err) {
    if (err) {
      // handle error
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
};
