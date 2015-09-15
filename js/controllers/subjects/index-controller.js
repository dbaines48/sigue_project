angular.module('SigueProject')
.controller('SubjectsIndexController', ['$scope', 'Subject', 'Session', '$location', function($scope, Subject, Session, $location) {
  $scope.isCollapsed = false;
  
  Subject.all(Session.getToken()).success(function(data){
    $scope.matters = data;
    $scope.isCollapsed = true;
  }).error(function(data){
    $location.url('/login');
  });
}]);