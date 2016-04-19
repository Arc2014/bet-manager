(function (module) {
    'use strict';

    var allowedRoutes = {
        'login': true
    };

    module.factory('authInterceptor', ['$location', '$q', '$rootScope', function ($location, $q, $rootScope) {
        var interceptor = {
            responseError: function (response) {
                if (response.status === 401) {
                    $location.path('/login');
                }

                $rootScope.$emit('hasError');

                return $q.reject(response);
            }
        };

        return interceptor;
    }]);

    module.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $routeProvider.otherwise({redirectTo: '/404'});
        $httpProvider.interceptors.push('authInterceptor');
    }]);


    module.run(['$rootScope', 'authService', '$location', '$timeout', 'storage', function ($rootScope, authService, $location, $timeout, storage) {

        function onRouteChange(ev, next) {
            if (isRestrictedPage(next.segment)) {
                authService
                    .isLogged()
                    .then(function (response) {

                        if (!hasUser($rootScope.user)) {
                            $rootScope.user = response.data;
                            $rootScope.user.profileSelected = storage.getOnSession('profileSelected');
                        }
                    }, function () {
                        $location.path('/login');
                    });
            }
        }

        function hasUser(user) {
            return Object.keys(user).length !== 0;
        }

        function isRestrictedPage(segmentName) {
            return segmentName && !allowedRoutes[segmentName];
        }

        $rootScope.$on('$routeChangeStart', onRouteChange);
    }]);

})(angular.module('authInterceptor', ['authService']));