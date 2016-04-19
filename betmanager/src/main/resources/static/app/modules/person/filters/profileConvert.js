(function (module) {

    'use strict';

    module.filter('profileConvert', function () {
        return function (value) {
            switch (value) {
            case 'ADM':
                return 'Administrador';
            case 'USER':
                return 'Usuário';
            default:
                return  '';
            }
        };
    });
})(angular.module('person'));
