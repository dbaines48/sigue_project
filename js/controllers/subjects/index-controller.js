angular.module('SigueProject')
.controller('SubjectsIndexController', ['$scope', 'Subject', function($scope, Subject) {
  $scope.matters = Subject.query();
}]);