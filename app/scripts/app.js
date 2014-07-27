"use strict";

var loginApp = angular.module('loginApp', ['ngRoute']);

loginApp.config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
});

loginApp.config(['$locationProvider', '$routeProvider',
  function ($location, $routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'templates/login.html',
        controller: 'AdminUserCtrl',
        access: { requiredLogin: false }
    })
    .when('/admin', {
        templateUrl: 'templates/admin.html',
        controller: 'AdminCtrl',
        access: { requiredLogin: true }
    })

    /* Default route */
    .otherwise({
        redirectTo: '/'
    });
}]);

loginApp.run(function($rootScope, $location, AuthenticationService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        if (nextRoute.access.requiredLogin && !AuthenticationService.isLogged) {
            $location.path("/");
        }
    });
});
