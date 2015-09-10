angular.module('SigueProject')
.controller('SubjectsIndexController', ['$scope', 'Subject', function($scope, Subject) {
  $scope.hiddenValue = false;
  $scope.matters = Subject.query(function(){
    $scope.hiddenValue = true;
  });
}]);