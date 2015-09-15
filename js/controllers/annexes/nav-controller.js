angular.module('SigueProject')
.controller('NavController', ['$scope', '$location', 'Session', function($scope, $location, Session){
  $scope.isActive = function(destination){
    return destination === $location.path();
  }

  $scope.isAuthenticated = function(){
    return Session.isAuth();
  }

  $scope.logout = function(){
    Session.logout();
    $scope.go('/home');
  }

  $scope.go = function(url){
    $location.url(url);
  };
}]);