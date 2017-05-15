'use strict';

angular
    .module('app')
    .factory('appService', appService);

function appService() {
    return {
        login: function login(userLogin) {
            var userLogin = {
                email: '',
                password: '',
            };
            return userLogin;
        }
    };
}