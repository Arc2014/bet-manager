(function (module) {

    'use strict';

    module.controller('PersonController', ['$scope', 'person', 'PersonResource', 'message', function ($scope, person, PersonResource, message) {
        $scope.person = person;

        $scope.save = function () {
            var personResource = new PersonResource($scope.person);
            personResource.$save().then(function () {
                message.success($scope, 'Usuário salvo com sucesso.');
            })['catch'](function () {
                message.error($scope, 'Erro ao salvar o usuário.');
            });
        };

    }]);
})(angular.module('person'));

