'use strict';

/**
 * @ngdoc overview
 * @name ngIfShowApp
 * @description
 * # ngIfShowApp
 *
 * Main module of the application.
 */
angular
    .module('ngIfShowApp', [
        'ngRoute',
        'ngSanitize',
        'angularStats',
        'robotsModule'
    ])
    .config(function ($routeProvider, $compileProvider, $logProvider) {
        // $compileProvider.debugInfoEnabled(false);
        // $logProvider.debugEnabled(false);

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .run(function initializeNgStats() {
        setTimeout(function () {
            window.self.showAngularStats({
                position: 'topleft',
                digestTimeThreshold: 100,
                logDigest: true,
                logWatches: true
            });
        }, 1000);
    });
