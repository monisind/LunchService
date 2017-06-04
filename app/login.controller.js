'use strict';
angular
    .module('app')
    .controller('loginController', loginController);

loginController.$inject = ['$scope','appService', '$state'];

function loginController($scope, appService, $state) {
    $scope.login = function login() {
        $state.go('menu');
    };


    $scope.googleUrl = 'http://google.com'
}