app.factory('UserFactory', function($http, $location, $sessionStorage) {
  var users = [];
  var factory = {};
  $sessionStorage.current_user;

  factory.create = function(user, callback) {
    console.log('made it to create in the factory');
    $http.post('/users', user).success(function(output) {
      $sessionStorage.current_user = output;
      callback(output);
      $location.url('/questions')
    });

    factory.user = function() {
      return $sessionStorage.current_user;
    }
  }

  return factory;


})

