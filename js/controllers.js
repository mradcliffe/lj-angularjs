'use strict';

var dcoControllers = angular.module('dcoControllers', []);

dcoControllers.controller('mainController', ['$scope',
    function($scope) {
        $scope.intro = 'I am the model of a modern, major general.';

        $scope.people = [
            'Sam',
            'Pat',
            'Andy',
            'Kit',
        ];
    }
]);
