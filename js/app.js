'use strict';

var dcoApp = angular.module('dco', [
    'ngRoute',
    'dcoControllers',
]);

dcoApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html',
                controller: 'mainController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);
