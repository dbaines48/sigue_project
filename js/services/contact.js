angular.module('SigueProject')
.factory('Contact', ['$resource', function ContactFactory($resource) {
  return $resource('https://sigue.herokuapp.com/api/v1/contacts/:id', {}, {});
}]);