angular.module('SigueProject')
.factory('Session', ['$http', '$cookieStore', '$localStorage', function SessionFactory($http, $cookieStore, $localStorage) {
  return {
    login: function(user){
      return $http({method: 'POST', url: 'https://sigue.herokuapp.com/api/v1/sessions', data: user})
    },
    isAuth: function(){
      return $cookieStore.get('token') !== undefined || $localStorage.auth.token !== null;
    },
    setToken: function(token, remember_me){
      if(remember_me){
        $localStorage.auth = {
          token: token,
          selected: remember_me
        };
      }else{
        $cookieStore.put('token', token);
      }
      console.log($localStorage.auth);
    },
    logout: function(){
      $cookieStore.put('token', undefined);
      $localStorage.auth = {
        token: null,
        selected: false
      };
      console.log($localStorage.auth);
    },
    getToken: function(){
      console.log($localStorage.auth);
      if($localStorage.auth.selected){
        return $localStorage.auth.token;
      }else{
        return $cookieStore.get('token');
      }
    }
  }
}]);