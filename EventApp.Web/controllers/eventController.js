(function () {
    var module = angular.module("EventApp");
    var eventController = function ($scope, $routeParams, eventService) {
        $scope.isEditable = false;
        var onReady = function () {
            if ($routeParams.id) {
                eventService.getEvent($routeParams.id).then(onEvent, onError);
            }
            else {
                eventService.getEvents().then(onEvents, onError);
            }
        };

        var onEvents = function (data) {
            $scope.events = data;
            console.log(data);
        };

        var onEvent = function (data) {
            $scope.event = data;
            console.log(data);
        };

        var onUpdate = function (data) {
            //$scope.event = data;
            console.log(data);
        };

        var onError = function (data) {
            $scope.msg = "Error";
        };

        $scope.save = function ()
        {
            eventService.updateEvent($scope.event).then(onUpdate, onError);
        }

        angular.element(document).ready(function () {
            onReady();
        });

        
    };
    module.controller("eventController", eventController);
}())