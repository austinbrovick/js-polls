var questions = require('./../controllers/questionController.js');
var options = require('./../controllers/optionController.js');
var users = require('./../controllers/userController.js');



module.exports = function(app) {
  console.log("made it to routes!!");


  app.post('/users', users.create); // creates user

  app.post('/questions', questions.index); // get all the questions






}

