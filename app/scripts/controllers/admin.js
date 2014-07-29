"use strict";

loginApp.controller('AdminCtrl', ['$scope', 'UserService', 'AuthenticationService',
    function AdminUserCtrl($scope, UserService, AuthenticationService) {

        $scope.ausgabe = "Was geht?";
        console.log("Hm isLogged? " + AuthenticationService.isLogged);
        console.log("User.name : " + UserService.getUserName());
}]);
