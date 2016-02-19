var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (
function() {
  return {
    index: function(req, res) {
      Question.find({}, function(err, results) {
        if(err) {
          console.log("errors!!");
        } else {
          res.json(results);
        }
      })
    },

    create: function(req, res) {
      var question = new Question(req.body);
      question.save(function(err, results) {
        if(err) {
          console.log("error");
        } else {
          res.json(results);
        }
      })
    }
  }
})();
