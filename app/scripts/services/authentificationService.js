"use strict";

loginApp.factory('AuthenticationService', function() {
    var auth = {
        isLogged: false
    }

    return auth;
});
