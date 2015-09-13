angular.module('SigueProject')
.directive('gradesTable', [function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/directives/subjects/grades-table.html',
    scope: {
      matter: '='
    }
  };
}]);