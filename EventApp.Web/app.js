(function () {
    var module = angular.module("EventApp", ["ngRoute"]);
    module.config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when("/", {
                controller: "eventController",
                templateUrl: "views/event.html"
            })
        .when("/events", {
            controller: "eventController",
            templateUrl: "views/event.html"
        })
        .when("/events/:id", {
            controller: "eventController",
            templateUrl: "views/eventdetails.html"
        })
        .when("/green", {
            templateUrl: "green.htm"
        })
        .when("/blue", {
            templateUrl: "blue.htm"
        })
        .otherwise({redirectTo:'/'});
    });
}())
