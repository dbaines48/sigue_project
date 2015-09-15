angular.module('SigueProject')
.factory('About', ['$http', function AboutFactory($http) {
  return {
    all: function(){
      return $http({method: 'GET', url: 'https://sigue.herokuapp.com/api/v1/abouts' });
    }
  }
}]);