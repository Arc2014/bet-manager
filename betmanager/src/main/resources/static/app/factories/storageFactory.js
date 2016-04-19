(function (module) {
    'use strict';

    module.factory('storage', function () {

        var setStorage = function (storageType, key, obj) {
            storageType.setItem(key, angular.toJson(obj));
        };

        var getStorage = function (storageType, key) {
            return angular.fromJson(storageType.getItem(key));
        };

        return {
            setOnSession: function (key, obj) {
                setStorage(sessionStorage, key, obj);
            },
            getOnSession: function (key) {
                return getStorage(sessionStorage, key);
            },
            removeItemOnSession : function (name) {
                sessionStorage.removeItem(name);
            },
            clearSessionStorage: function () {
                sessionStorage.clear();
            }
        };
    });

})(angular.module('storageFactory', []));