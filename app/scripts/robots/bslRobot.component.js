'use strict';

angular.module('robotsModule')
    .component('bslRobot', {
        templateUrl: 'views/bslRobot.template.html',
        bindings: {
            robot: '<'
        }
    });