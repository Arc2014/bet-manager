(function (module) {

    'use strict';

    module.controller('PersonListController',  ['$scope', 'PersonResource', 'persons', 'message', 'AlertDialog', function ($scope, PersonResource, persons, message, AlertDialog) {
        $scope.persons = persons;

        $scope['delete'] = function (person) {
            var confirmDelete = AlertDialog.show({message : 'Deseja excluir o usuário ' + person.name, okLabel : 'Sim', cancelLabel : 'Não'});

            confirmDelete.then(function () {
                var personToDelete = new PersonResource(person);
                personToDelete.$delete({id: personToDelete.id}).then(function () {
                    $scope.updateList();
                })['catch'](function () {
                    message.error($scope, 'Erro ao excluir o usuário.');
                });
            });
        };

        $scope.updateList = function () {
            getPersons();
        };

        var getPersons = function () {
            PersonResource.query().$promise.then(function (persons) {
                $scope.persons = persons;
            })['catch'](function () {
                message.error($scope, 'Erro ao carregar usuários.');
            });
        };

    }]);
})(angular.module('person'));