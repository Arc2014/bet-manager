(function (module) {

    'use strict';

    module.controller('LoginController',  ['$scope', '$rootScope', 'authService', '$location', function ($scope, $rootScope, authService, $location) {
        $scope.credentials = {};

        $scope.login = function () {
            var credentials = $.param($scope.credentials);

            authService
                .authenticate(credentials)
                .then(handleSuccess, handleError);
        };

        var handleSuccess = function () {
            authService.getLoggedUser().then(function (response) {
                $rootScope.user = response.data;
                return $location.path('/');
            });

        };

        var handleError = function (response) {
            if (response.status === 403 || response.status === 401) {
                window.location.reload();
            }
        };

    }]);
})(angular.module('login'));