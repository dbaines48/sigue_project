angular.module('SigueProject')
.directive('footer', function footerDirective() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      $(document).on('ready', function () {

        console.log($("body").height());

        if( $("body").height() < $(window).height() ){
          element.addClass('bottom-footer');
        }else{
          element.removeClass('bottom-footer');
        }
      });
      
    }
  };
});