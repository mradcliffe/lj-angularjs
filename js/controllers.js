'use strict';

var dcoControllers = angular.module('dcoControllers', []);

dcoControllers.controller('mainController', ['$scope',
    function($scope) {
        $scope.intro = 'I am the model of a modern, major general.';

    }
]);

dcoControllers.controller('peopleController', ['$scope', 'Person',
    function($scope, Person) {
        $scope.people = Person.query();
    }
]);

dcoControllers.controller('personController', ['$scope', '$routeParams', 'Person',
    function($scope, $routeParams, Person) {
        $scope.person = Person.get({person: $routeParams.person}, function(person) {
            // Do something extra here.
        });
    }
]);
