angular.module('SigueProject')
.controller('SessionsNewController', ['$scope', 'Session', '$base64', '$location', function($scope, Session, $base64, $location) {
  $scope.session = {};
  $scope.isCollapsed = true;

  $scope.login = function(){
    $scope.session.remember_me = true;
    for (var i = 0; i < 7; i++) {
      $scope.session.password = $base64.encode($scope.session.password)
    }
    
    $scope.isCollapsed = false;

    Session.login($scope.session).success(function(data){
      Session.setToken(data.token);
      $scope.session = {};
      $scope.isCollapsed = true;
      $location.url('/subjects');
    }).error(function(data){
      $scope.session = {};
      $scope.isCollapsed = true;
      console.log(data);
    });
  }
}]);