angular.module('SigueProject')
.controller('AboutController', ['$scope', function($scope){

  $scope.authors = [{
    image: 'http://i62.tinypic.com/314tu6t.jpg',
    name: 'Alexander Taborda',
    phone: '3004348412'
  },
  {
    image: 'http://i60.tinypic.com/21nh9ih.jpg',
    name: 'Fabian Betancur',
    phone: '3007249114'
  },
  {
    image: 'http://i62.tinypic.com/5y6fdi.jpg',
    name: 'Daniel Blanco',
    phone: '3003392676'
  }];
}]);