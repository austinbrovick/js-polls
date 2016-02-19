app.factory('QuestionFactory', function($http) {
  var questions = [];
  var factory = {};

  factory.get_questions = function(callback) {
    $http.post('/questions').success(function(output) {
      callback(output);
    });
  }

  return factory;



});
