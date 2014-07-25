"use strict";

var loginApp = angular.module('loginApp', ['ngRoute']);

loginApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        //templateUrl: 'templates/book_details_with_expressions.html',
        templateUrl: 'templates/login.html',
        controller: 'AdminUserCtrl'
    })

    /* Default route */
    .otherwise({
        redirectTo: '/'
    });
});
