angular.module('SigueProject')
.factory('Session', ['$http', function SessionFactory($http) {
  var token = undefined;
  return {
    login: function(user){
      return $http({method: 'POST', url: 'https://sigue.herokuapp.com/api/v1/sessions', data: user})
    },
    isAuth: function(){
      return this.token !== undefined;
    },
    setToken: function(token){
      this.token = token;
    },
    logout: function(){
      this.token = undefined;
    },
    getToken: function(){
      return this.token;
    }
  }
}]);