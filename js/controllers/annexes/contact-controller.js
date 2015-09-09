angular.module('SigueProject')
.controller('ContactController', ['$scope', 'Contact', function($scope, Contact){
  $scope.review = new Contact();

  $scope.addReview = function(review){
    bootbox.confirm("Are you sure you want to send that?", function(answer){
      if(answer == true){
        review.$save(review);
        bootbox.alert("Review Send.");
        $scope.review = new Contact();
      }
    });
  };
}]);