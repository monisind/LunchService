'use strict';
angular
    .module('app')
    .config(function ($stateProvider) {
        $stateProvider
            .state('start', {
                url: '/',
                templateUrl: 'login.view.html',
                controller: 'loginController'
            })
            .state('menu', {
                url: '/menu',
                templateUrl: 'menu.view.html',
                controller: 'menuController'
            })
            .state('order', {
                url: '/order',
                templateUrl: 'order.view.html',
                controller: 'orderController'
            })
    });