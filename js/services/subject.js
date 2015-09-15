angular.module('SigueProject')
.factory('Subject', ['$http', function SubjectFactory($http) {
  return {
    all: function(token){
      return $http({method: 'GET', url: 'https://sigue.herokuapp.com/api/v1/matters?token=' + token });
    }
  }
}]);