angular.module('SigueProject')
.controller('NavController', ['$scope', '$location', 'Go', function($scope, $location, Go){
  $scope.isActive = function(destination){
    return destination === $location.path();
  }

  $scope.go = function(url){
    Go(url);
  };
}]);