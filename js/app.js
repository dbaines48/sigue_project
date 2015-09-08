angular.module('SigueProject', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'angular-flippy'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/pages/annexes/home.html',
      controller: 'HomeController'
    })
    .when('/subjects', {
      templateUrl: 'templates/pages/subjects/index.html',
      controller: 'SubjectsIndexController'
    })
    .when('/subjects/:id', {
      templateUrl: 'templates/pages/subjects/show.html'
    })
    .when('/about', {
      templateUrl: 'templates/pages/annexes/about.html'
    })
    .when('/contact', {
      templateUrl: 'templates/pages/annexes/contact.html',
      controller: 'ContactController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);