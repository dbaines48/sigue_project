angular.module('SigueProject', ['ngRoutes'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
    .when('/explore', {
      templateUrl: 'templates/pages/explore/index.html',
      controller: 'ExploreIndexController'
    })
    .when('/explorer/:id', {
      templateUrl: 'templates/pages/explore/index.html',
      controller: 'ExploreShowController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);