angular.module('SigueProject')
.controller('FooterController', ['$scope', '$location', '$anchorScroll', 'About', function($scope, $location, $anchorScroll, About){

  About.all().success(function(data){
    $scope.authors = data;
  });

  $scope.p1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consequat sit amet nisi id gravida. Ut mollis neque nec dictum interdum. Sed porta, nisi vitae laoreet malesuada, libero erat euismod lorem, quis ultrices leo arcu nec magna. Pellentesque nec ultrices enim. Maecenas fermentum, tellus a vehicula rhoncus, lectus urna euismod lectus, nec malesuada nunc nisl id ligula. Nam ac nulla odio. Praesent non metus gravida, facilisis sem nec, congue ante. Nam a viverra velit. Cras interdum diam non nulla aliquet, quis egestas orci rhoncus. Vestibulum dapibus, elit sit amet aliquam dignissim, erat nisl malesuada nulla, sed sagittis dolor augue eu dui.";
  
  $scope.p2 = "Suspendisse hendrerit felis suscipit, interdum nisl pharetra, tincidunt massa. Mauris mollis sem et metus efficitur, vitae semper ipsum elementum. Quisque eu mi gravida, faucibus tellus vel, ultrices ipsum. Fusce porttitor convallis nunc id aliquet. Mauris rutrum faucibus diam ac blandit. Sed egestas orci mauris. Phasellus egestas leo non semper fringilla. Donec interdum metus ligula, a aliquam enim aliquet in.";

  $scope.go = function(url){
    $location.path(url);
    $location.hash('top');
    $anchorScroll();
  };
}]);