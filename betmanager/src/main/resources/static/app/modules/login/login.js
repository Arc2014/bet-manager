(function (module) {

    'use strict';

    module.config(['$routeSegmentProvider', function ($routeSegmentProvider) {
        $routeSegmentProvider.when('/login', 'login')
            .segment('login', {
            templateUrl: '/app/modules/login/views/login.html',
            controller: 'LoginController'
        });
    }]);

})(angular.module('login', []));