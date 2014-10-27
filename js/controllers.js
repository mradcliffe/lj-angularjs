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

dcoControllers.controller('personController', ['$scope', '$routeParams', 'Person', 'File', 'Interest',
    function($scope, $routeParams, Person, File, Interest) {
        $scope.avatar = {};
        $scope.interests = [];

        $scope.person = Person.get({person: $routeParams.person}, function(person) {

            if (typeof person.user_picture[0].target_id !== 'undefined') {
                $scope.avatar = File.get({fid: person.user_picture[0].target_id});
            } else {
                $scope.avatar = {uri: 'css/images/anon.png'};
            }

            if (typeof person.field_interests !== 'undefined') {

                for (var n in person.field_interests) {
                    Interest.get({tid: person.field_interests[n].target_id}).$promise.then(function(result) {
                        $scope.interests.push(result.name[0].value);
                    });
                }
            }
        });
    }
]);
