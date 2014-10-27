'use strict';

var dcoServices = angular.module('dcoServices', ['ngResource']);

dcoServices.transformResponse = function(data) {
    var response = angular.fromJson(data);

    if (typeof response[0] !== 'undefined') {
        var object = response[0];
        return object;
    }

    return response;
};

dcoServices.factory('Person', ['$resource',
    function($resource) {
        return $resource('/api/people/:person', {}, {
            query: {method: 'GET', params: {person: ''}, isArray: true},
            get: {
                method: 'GET',
                params: {person: '@person'},
                transformResponse: dcoServices.transformResponse
            }
        });
    }
]);

dcoServices.factory('File', ['$resource',
    function($resource) {
        return $resource('/api/file/:fid', {}, {
            query: {method: 'GET', params: {fid: ''}, isArray: true},
            get: {
                method: 'GET',
                params: {fid: '@fid'},
                transformResponse: dcoServices.transformResponse
            }
        });
    }
]);

dcoServices.factory('Interest', ['$resource',
    function($resource) {
        return $resource('/api/interest/:tid', {}, {
            query: {method: 'GET', params: {tid: ''}, isArray: true},
            get: {
                method: 'GET',
                params: {tid: '@tid'},
                transformResponse: dcoServices.transformResponse
            }
        });
    }
]);
