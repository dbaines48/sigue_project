angular.module('SigueProject', ['ngRoutes'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);