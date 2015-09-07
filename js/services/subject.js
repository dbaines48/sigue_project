angular.module('SigueProject')
.factory('Subject', ['$routeParams', '$http', function SubjectFactory($routeParams, $http) {
  return {
    all: function() {
      return $http({method: 'GET', url: 'https://sigue.herokuapp.com/api/v1/users/1/matters'});
    }
  };
}]);