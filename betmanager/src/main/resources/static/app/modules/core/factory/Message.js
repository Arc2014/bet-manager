(function (module) {

    'use strict';

    module.factory('message', ['$anchorScroll', function ($anchorScroll) {

            var show = function (scope, message, type) {
                scope.messageBox = {
                    show: true,
                    message: message,
                    type: type
                };

                $anchorScroll();
            };

            return {
                error: function (scope, message) {
                    show(scope, message, 'danger');
                },

                success: function (scope, message) {
                    show(scope, message, 'success');
                },

                warning: function (scope, message) {
                    show(scope, message, 'warning');
                },

                hide: function (scope) {
                    scope.messageBox = {show: false};
                }
            };
        }]);

})(angular.module('core'), []);
