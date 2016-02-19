app.controller('QuestionController', ['$scope', 'QuestionFactory', function($scope, QuestionFactory) {

  QuestionFactory.get_questions(function(data) {
    console.log("data : ", data);
    $scope.questions = data;
  })









}]);
