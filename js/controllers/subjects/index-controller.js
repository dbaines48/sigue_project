angular.module('SigueProject')
.controller('SubjectsIndexController', ['$scope', 'Subject', function($scope, Subject) {
  Subject.all().success(function(data){
    $scope.matters = data.matters;
  });
}]);