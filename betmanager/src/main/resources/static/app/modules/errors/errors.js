(function (module) {

    'use strict';

    module.config(['$routeSegmentProvider', function ($routeSegmentProvider) {
        $routeSegmentProvider
            .when('/404', '404')
            .segment('404', {
                templateUrl: '/app/modules/errors/views/404.html',
                controller: 'ErrorController'
            })
        .when('/500', '500')
            .segment('500', {
                templateUrl: '/app/modules/errors/views/500.html',
                controller: 'ErrorController'
            });
    }]);
})(angular.module('errors', []));