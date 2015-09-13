angular.module('SigueProject')
.factory('Session', ['$resource', function SessionFactory($resource) {
  return $resource('https://sigue.herokuapp.com/api/v1/sessions/:id', {}, {});
}]);