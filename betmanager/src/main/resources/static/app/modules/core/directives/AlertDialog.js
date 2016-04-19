(function (module) {

    'use strict';

    var DEFAULT_OPTIONS = {
        showOkButton: true,
        showCancelButton: true,
        title: 'Alerta',
        okLabel: 'Ok',
        cancelLabel: 'Cancelar',
        okClass: 'btn-info',
        cancelClass: 'btn-default'
    };

    module.directive('alertDialog', ['AlertDialog', function (AlertDialog) {
        return  {
            restrict: 'A',
            templateUrl: '../app/modules/core/views/modelAlertDialog.html',
            link: function ($scope, element) {
                $scope.options = AlertDialog.getOptions();
                $scope.options.uuid = 'alert-dialog-' + new Date().getTime();

                $scope.okClick = function () {
                    closeModal();
                    AlertDialog.okClick(getFieldsValues());
                };

                $scope.cancelClick = function () {
                    closeModal();
                    AlertDialog.cancelClick();
                };

                var closeModal = function () {
                    angular.element('#' + $scope.options.uuid).modal('hide');
                };

                var getFieldsValues = function () {
                    var object = {};
                    var fields = element.find('div.modal-body textarea');
                    if (!_.isEmpty(fields)) {
                        angular.forEach(fields, function (field) {
                            var fieldElement = angular.element(field);
                            object[fieldElement.attr('field')] = fieldElement.val();
                        });
                    }
                    return object;
                };
            }
        };
    }]);

    module.factory('AlertDialog', ['$document', '$rootScope', '$compile', '$q', '$timeout', function ($document, $rootScope, $compile, $q, $timeout) {
        var deferred;
        var modal;
        var alertDialog = {
            setOptions: function (options) {
                this.options = angular.extend({}, DEFAULT_OPTIONS, options);
            },
            getOptions: function () {
                return this.options;
            },
            show: function (options) {
                deferred = $q.defer();
                this.setOptions(options);
                createModal();
                return deferred.promise;
            },
            okClick: function (data) {
                deferred.resolve(data);
            },
            cancelClick: function () {
                deferred.reject();
            }
        };

        var createModal = function () {
            var alertModal = angular.element('<div alert-dialog></div>');
            var alertModalScope = $rootScope.$new(true);
            $compile(alertModal)(alertModalScope);
            alertModal.appendTo('body');
            openModal();
        };

        var openModal = function () {
            $timeout(function () {
                modal = angular.element('#' + alertDialog.options.uuid);
                eventSafe();
                modal.modal({backdrop: 'static', keyboard: false});
            }, 100);
        };

        var eventSafe = function () {
            modal.on('focusin', function (e) {
                e.stopPropagation();
            });
        };

        return alertDialog;
    }]);
})(angular.module('core'));