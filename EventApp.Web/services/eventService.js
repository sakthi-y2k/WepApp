(function () {
    var eventService = function ($http) {
        var getEvents = function () {
            return $http({
                method: 'GET',
                url: 'http://localhost/EventService/api/values',
                dataType: "json",
                data:'',
                headers: {
                    "Accept": "text/html"
                }
            })
                .then(function (response) {
                    console.log(response);
                    return response.data;
                })
        };

        var getEvent = function (eventId) {
            return $http({
                method: 'GET',
                url: 'http://localhost/EventService/api/values/' + eventId,
                dataType: "json",
                data: '',
                headers: {
                    "Accept": "text/html"
                }
            })
                .then(function (response) {
                    return response.data;
                })
        };

        var updateEvent = function (event) {
            return $http({
                method: 'POST',
                url: 'http://localhost/EventService/api/values/' + event.eventId,
                dataType: "json",
                data: event,
                headers: {
                    "Accept": "text/html"
                }
              })
                .then(function (response) {
                    return response.data;
                })
        };
        return {
            getEvents: getEvents,
            getEvent: getEvent,
            updateEvent: updateEvent
        }
    };

    var module = angular.module("EventApp").factory("eventService", eventService);

}())