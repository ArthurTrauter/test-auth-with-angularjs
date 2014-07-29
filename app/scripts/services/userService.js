"use strict";

loginApp.factory('UserService', function($http) {
    var _username = "";
    var options = { api : { base_url : "http://marad010:1234" }};
    return {
        logIn: function(username, password) {
            _username = username;
            return $http.get(options.api.base_url + '/login', {username: username, password: password});
        },

        logOut: function() {

        },

        getUserName: function() {
          return _username;
        }
    }
});
