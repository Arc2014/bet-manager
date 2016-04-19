(function (module) {

    'use strict';

    module.controller('MasterController',  ['$scope', '$rootScope', '$location', 'authService', function ($scope, $rootScope, $location, authService) {
        $scope.logout = function () {
            authService.logout().then(function () {
                $rootScope.user = {};
                $location.path('/login');
            });
        };
    }]);
})(angular.module('master'));