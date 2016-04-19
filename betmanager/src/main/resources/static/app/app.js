(function (module) {
    'use strict';

    module.run(['$rootScope', '$location', function ($rootScope, $location) {
        $rootScope.user = {};
        $rootScope.location = $location;

        $rootScope.isValidField = function (form, field) {
            return form.$submitted && form[field].$invalid || form[field].$touched && form[field].$invalid;
        };

        $rootScope.hasProfile = function (profile) {
            if (profile !== 'ALL') {
                return _.find($rootScope.user.profiles, function (userProfile) {
                    return userProfile.name === profile;
                });
            } else {
                return true;
            }
        };

        $rootScope.isCompany = function (company) {
           return company == $rootScope.user.company || company == 'ALL';
        };
    }]);

    module.config(['cfpLoadingBarProvider', '$httpProvider', '$provide', function (cfpLoadingBarProvider, $httpProvider, $provide) {
        cfpLoadingBarProvider.includeSpinner = true;
        cfpLoadingBarProvider.includeBar = false;
        cfpLoadingBarProvider.spinnerTemplate = '<div id="overlay-loading"><div id="loading-area"><img src="../assets/loading.gif"/><p>Carregando...</p></div></div>';

        $provide.decorator('$resource', function ($delegate) {
            return function (url, defaultParams, actions) {
                var newActions = angular.extend(actions || {}, {
                    getPage: {
                        url: url + '/page',
                        isArray: false
                    },
                    create: {method: 'POST', isArray: false},
                    update: {method: 'PUT', isArray: false}
                });
                var newParams = angular.extend(defaultParams || {}, {id: '@id'});
                var resource = $delegate(url + '/:id', newParams, newActions);
                resource.prototype.$save = function () {
                    if (!this.id) {
                        return this.$create();
                    }
                    return this.$update();
                };
                return resource;
            };
        });
    }]);

})(angular.module('betmanager', [
    'ngRoute',
    'route-segment',
    'view-segment',
    'ngResource',
    'angular-loading-bar',
    'login',
    'master',
    'authInterceptor',
    'errors',
    'person',
    'core',
    'ui.calendar',
    'address'
]));
