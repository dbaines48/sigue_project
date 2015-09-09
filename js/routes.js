angular.module('SigueProject')
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/subjects', {
      templateUrl: 'templates/pages/subjects/index.html',
      controller: 'SubjectsIndexController'
    })
    .when('/home', {
      templateUrl: 'templates/pages/annexes/home.html',
      controller: 'HomeController'
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