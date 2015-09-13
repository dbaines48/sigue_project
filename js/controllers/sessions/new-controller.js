angular.module('SigueProject')
.controller('SessionsNewController', ['$scope', 'Session', '$base64', function($scope, Session, $base64) {
  $scope.session = new Session();

  $scope.login = function(session){
    session.remember_me = true;
    for (var i = 0; i < 7; i++) {
      session.password = $base64.encode(session.password)
    };
    session.$save(function(data){
      console.log(data);
    });
    
    $scope.session = new Session();
  }
}]);