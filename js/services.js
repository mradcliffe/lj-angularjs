'use strict';

var dcoServices = angular.module('dcoServices', ['ngResource']);

dcoServices.factory('Person', ['$resource',
    function($resource) {
        return $resource('content/:person.json', {}, {
            query: {method: 'GET', params: {person: 'people'}, isArray: true}
        });
    }
]);
