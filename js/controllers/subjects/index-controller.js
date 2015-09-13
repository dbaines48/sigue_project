angular.module('SigueProject')
.controller('SubjectsIndexController', ['$scope', 'Subject', function($scope, Subject) {
  $scope.isCollapsed = false;
  
  $scope.matters = Subject.query(function(){
    $scope.isCollapsed = true;
  });
}]);