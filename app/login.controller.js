'use strict';
angular
    .module('app')
    .controller('loginController', loginController);

loginController.$inject = ['$scope','appService', '$state'];

function loginController($scope, appService, $state) {
    $scope.login = function login(user) {
        // $scope.solution = appService.login($scope.userLogin);
        $state.go('menu');
    };


    $scope.googleUrl = 'http://google.com'
}