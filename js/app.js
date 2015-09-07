angular.module('SigueProject', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
    .when('/subjects', {
      templateUrl: 'templates/subjects/index.html'
    })
    .when('/subjects/:id', {
      templateUrl: 'templates/subjects/show.html'
    })
    .when('/about', {
      templateUrl: 'templates/annexes/about.html'
    })
    .when('/contact', {
      templateUrl: 'templates/annexes/contact.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);