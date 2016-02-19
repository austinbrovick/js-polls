var app = angular.module('app', ['ngRoute', 'ngStorage']);


app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'UserController'
  })

  .when('/questions', {
    templateUrl: 'questions.html',
    controller: 'QuestionController'
  })



})
