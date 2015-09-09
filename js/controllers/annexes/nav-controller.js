angular.module('SigueProject')
.controller('NavController', ['$scope', '$location', function($scope, $location){
  $scope.isActive = function(destination){
    return destination === $location.path();
  }

  $scope.go = function(url){
    $location.url(url);
  };
}]);