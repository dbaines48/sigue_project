angular.module('SigueProject')
.controller('ContactController', ['$scope', function($scope){
  $scope.review = {};

  $scope.addReview = function(){
    $scope.review = {};
  }

}]);