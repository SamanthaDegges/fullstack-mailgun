var express = require('express');
var router = express.Router();

var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var recepients =  Schema({
  name: String,
  email: String
});

var recepient = Mongoose.model('recepient', recepients);

/* GET home page. */
router.get('/', function(req, res, next) {
  recepient.find({}, function(err, found){ //where second arg is success
    res.send(err || found);
  });
});

router.post('/', function(req, res, next) {
  var newRecepient = new recepient(req.body);
  //  console.log(req.body);
  newRecepient.save(function(err, saved) {
    res.send(err || saved);
  });
});

router.delete('/:recepientId', function(req, res) {
  recepient.findbyIdAndRemove(req.params.recepientId, function(err, removed){
    if (err || !removed) {
      res.status(400).send(err || "That person cannot be found in the database.");
    } else {
      res.send(removed);
    }
  });
});

module.exports = router;
