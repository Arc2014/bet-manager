(function (module) {

    'use strict';

    module.config(['$routeSegmentProvider', function ($routeSegmentProvider) {
        $routeSegmentProvider.when('/personList', 'master.personList')
        .within('master').segment('personList', {
            templateUrl: '/app/modules/person/views/personList.html',
            controller: 'PersonListController',
            resolve: {
                persons: ['PersonResource', function (PersonResource) {
                    return PersonResource.query().$promise;
                }]
            }
        });


        $routeSegmentProvider.when('/personsNew', 'master.personNew')
            .within('master').segment('personNew', {
            templateUrl: '/app/modules/person/views/person.html',
            controller: 'PersonController',
            resolve: {
                person: ['PersonResource', function (PersonResource) {
                    return new PersonResource();
                }]
            }
        });

        $routeSegmentProvider.when('/persons/:id', 'master.person')
        .within('master').segment('person', {
            templateUrl: '/app/modules/person/views/person.html',
            controller: 'PersonController',
            resolve: {
                person: ['PersonResource', '$route', function (PersonResource, $route) {
                    return PersonResource.get({id: $route.current.params.id}).$promise;
                }]
            }
        });



    }]);

})(angular.module('person', []));