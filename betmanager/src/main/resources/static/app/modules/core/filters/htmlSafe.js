(function (module) {

    'use strict';

    module.filter('htmlSafe', ['$sce', function ($sce) {
        return function (value) {
            return $sce.trustAsHtml(value);
        };
    }]);
})(angular.module('core'));