angular.module('SigueProject')
.factory('Subject', ['$resource', function SubjectFactory($resource) {
  return $resource('https://sigue.herokuapp.com/api/v1/users/1/matters/:id', {}, {});
}]);