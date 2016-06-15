'use strict';

angular.module('robotsModule')
    .component('bslRobot', {
        templateUrl: 'views/bslRobot.template.html',
        bindings: {
            robot: '<'
        },
        controller: function ($scope, $element) {
            this.$postLink = function () {
                $scope.$applyAsync(function() {
                    var position = $element.position();
                    $scope.left = position.left;
                    $scope.top = position.top;
                })
            }
        }
    });