angular.module('SigueProject')
.controller('HomeController', ['$scope', function($scope){
  $scope.myInterval = 3000;

  $scope.slides = [{
    image: 'http://placekitten.com/602/300',
    text: 'cat1',
    slogan: 'kitty1',
    alignEnter: 'center-align'
  },
  {
    image: 'http://placekitten.com/603/300',
    text: 'cat2',
    slogan: 'kitty2',
    alignEnter: 'left-align'
  },
  {
    image: 'http://placekitten.com/604/300',
    text: 'cat3',
    slogan: 'kitty3',
    alignEnter: 'right-align'
  }];
}]);