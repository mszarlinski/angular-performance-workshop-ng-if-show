'use strict';

angular.module('robotsModule', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/robots', {
                templateUrl: 'views/robots.html',
                controller: 'robotsCtrl',
                controllerAs: 'vm'
            });
    });