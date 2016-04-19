(function (module) {

    'use strict';

    module.factory('state', function () {

        return {
            getState : function () {
                var states = [ {uf: 'AC', label: 'Acre'},
                    {uf: 'AL', label: 'Alagoas'},
                    {uf: 'AP', label: 'Amapá'},
                    {uf: 'AM', label: 'Amazonas'},
                    {uf: 'BA', label: 'Bahia'},
                    {uf: 'CE', label: 'Ceará'},
                    {uf: 'DF', label: 'Distrito Federal'},
                    {uf: 'ES', label: 'Espirito Santo'},
                    {uf: 'GO', label: 'Goiás'},
                    {uf: 'MA', label: 'Maranhão'},
                    {uf: 'MT', label: 'Mato Grosso'},
                    {uf: 'MS', label: 'Mato Grosso do Sul'},
                    {uf: 'MG', label: 'Minas Gerais'},
                    {uf: 'PA', label: 'Pará'},
                    {uf: 'PB', label: 'Paraiba'},
                    {uf: 'PR', label: 'Paraná'},
                    {uf: 'PE', label: 'Pernambuco'},
                    {uf: 'PI', label: 'Piauí'},
                    {uf: 'RJ', label: 'Rio de Janeiro'},
                    {uf: 'RN', label: 'Rio Grande do Norte'},
                    {uf: 'RS', label: 'Rio Grande do Sul'},
                    {uf: 'RO', label: 'Rondônia'},
                    {uf: 'RR', label: 'Roraima'},
                    {uf: 'SC', label: 'Santa Catarina'},
                    {uf: 'SP', label: 'São Paulo'},
                    {uf: 'SE', label: 'Sergipe'},
                    {uf: 'TO', label: 'Tocantis'}
                ];
                return states;
            }
        };

    });

})(angular.module('address'));
