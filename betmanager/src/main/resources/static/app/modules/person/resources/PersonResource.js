(function (module) {

    'use strict';

    module.factory('PersonResource', ['$resource', function ($resource) {
        return $resource('/persons');
    }]);
})(angular.module('person'));