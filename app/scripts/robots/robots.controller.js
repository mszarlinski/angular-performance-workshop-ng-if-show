'use strict';

angular.module('robotsModule')
    .controller('robotsCtrl', function () {
        var vm = this;

        this.robots = [];
        this.robotsCount = 5;

        var generateName = function () {
            return Math.random().toString(36).substring(2, 12);
        };

        this.generateRobots = function () {
            vm.robots = [];
            for (var i = 0; i < vm.robotsCount; i++) {
                vm.robots.push(new BslRobot());
            }
            console.log('Generation completed');
        };

        this.toggleRobots = function () {
            vm.showRobots = !vm.showRobots;
        };

        var BslRobot = function () {
            this.name = generateName();
        };

    });
