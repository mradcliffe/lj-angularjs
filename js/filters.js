'use strict';

var dcoFilters = angular.module('dcoFilters', []);

dcoFilters.filter('search',
    function() {
        return function (items, search) {
            if (!search || search.name.length === 0) {
                return items;
            } else {
                var search_word = search.name.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
                var filter = new RegExp('\\b' + search_word, 'i');
                return items.reduce(function(prev, curr) {
                    if (curr.name.match(filter)) {
                        prev.push({name: curr.name});
                    }
                    return prev;
                }, []);
            }
        };
    }
);
