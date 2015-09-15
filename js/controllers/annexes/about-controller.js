angular.module('SigueProject')
.controller('AboutController', ['$scope', 'About', function($scope, About){
  About.all().success(function(data){
    $scope.authors = data;
  });
}]);