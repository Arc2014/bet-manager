(function (module) {

    'use strict';

    module.directive('ngAddress', ['state', function (state) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                entity: '='
            },
            templateUrl: '../app/modules/address/views/formAddress.html',
            link : function (scope) {
                scope.states = state.getState();
            }
        };
    }]);
})(angular.module('address'));