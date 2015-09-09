angular.module('SigueProject')
.controller('HomeController', ['$scope', function($scope){
  $scope.myInterval = 3000;

  $scope.slides = [{
    image: 'http://placekitten.com/602/300',
    text: 'cat1'
  },
  {
    image: 'http://placekitten.com/603/300',
    text: 'cat2'
  },
  {
    image: 'http://placekitten.com/604/300',
    text: 'cat3'
  }];
  
  $scope.go = function(url){
    $location.url(url);
  };
}]);