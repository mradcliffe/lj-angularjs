'use strict';

var dcoApp = angular.module('dco', [
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'dcoControllers',
    'dcoServices',
    'dcoFilters',
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
            when('/people', {
                templateUrl: 'partials/people.html',
                controller: 'peopleController'
            }).
            when('/people/:person', {
                templateUrl: 'partials/person.html',
                controller: 'personController'
            }).
            when('/friends', {
                templateUrl: 'partials/friends.html',
                controller: 'friendController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
]);
