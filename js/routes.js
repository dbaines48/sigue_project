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
      templateUrl: 'templates/pages/annexes/about.html',
      controller: 'AboutController'
    })
    .when('/contact', {
      templateUrl: 'templates/pages/annexes/contact.html',
      controller: 'ContactController'
    })
    .when('/login', {
      templateUrl: 'templates/pages/sessions/new.html',
      controller: 'SessionsNewController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);