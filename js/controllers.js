'use strict';

var dcoControllers = angular.module('dcoControllers', []);

dcoControllers.controller('mainController', ['$scope',
    function($scope) {
        $scope.names = ['Matthew'];

        $scope.add = function() {
            $scope.names.push($scope.name);
            $scope.name = '';
        };
    }
]);
