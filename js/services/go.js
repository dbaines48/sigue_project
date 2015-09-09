angular.module('SigueProject')
.factory('Go', ['$location', function GoFactory($location) {
  return function(url){
    $location.url(url);
  };
}]);