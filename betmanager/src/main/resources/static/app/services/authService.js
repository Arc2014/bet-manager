(function (module) {
    'use strict';

    module.service('authService', ['$http', '$q', 'storage', function ($http, $q, storage) {
        var self = this;

        self.isLogged = function () {
            var deferred = $q.defer();

            self.getLoggedUser().then(function (d) {
                deferred.resolve(d);
            }, function () {
                deferred.reject('User not logged');
            });

            return deferred.promise;
        };

        self.authenticate = function (credentials) {
            return $http({
                url: 'login',
                data: credentials,
                method: 'POST',
                headers: {'content-type': 'application/x-www-form-urlencoded'}
            });
        };

        self.getLoggedUser = function () {
            return $http({
                url: 'logged-user',
                method: 'GET'
            });
        };

        self.logout = function () {
            storage.clearSessionStorage();
            return $http({
                url: 'logout',
                method: 'POST'
            });
        };
    }]);

})(angular.module('authService', ['storageFactory']));
