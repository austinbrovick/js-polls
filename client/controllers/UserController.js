app.controller('UserController', ['$scope', '$sessionStorage', 'UserFactory', function($scope, $sessionStorage, UserFactory) {
  $scope.login = function(user) {
    console.log("adding/logging in user");
    UserFactory.create(user, function(user_object) {
      console.log(user_object);
    });


    $scope.user = {};


  }





}]);
