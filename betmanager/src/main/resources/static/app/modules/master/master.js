(function (module) {

    'use strict';

    module.config(['$routeSegmentProvider', function ($routeSegmentProvider) {
        $routeSegmentProvider.when('/', 'master')
            .segment('master', {
            templateUrl: '/app/modules/master/views/master.html'
        }).within().segment('home', {
            'default': true,
            templateUrl: '/app/modules/master/views/home.html',
            controller: 'CalendarController'
        });
    }]);

})(angular.module('master', []));