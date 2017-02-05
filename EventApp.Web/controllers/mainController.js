(function () {
    var module = angular.module("EventApp");
    var mainController = function ($scope, eventService) {
        angular.element(document).ready(function () {
            onReady();
        });

        var onReady = function () {
            eventService.getEvents().then(onEvents, onError);
        };

        var onEvents = function (data) {
            $scope.events = data;
            console.log(data);
        };

        var onError = function (data) {
            $scope.msg = "Error";
        };
    };
    module.controller("MainController", mainController);
}())