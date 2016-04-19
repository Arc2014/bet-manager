(function (module) {

    'use strict';

    module.directive('inputMask', function () {
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                $.mask.definitions['~'] = '([0-9])?';
                element.mask(attrs.mask);
            }
        };
    });
})(angular.module('core'));