angular.module('solApp').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: 'templates/main.html',
        controller: "MainController"
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: "AboutController"
    })
    .when('/description', {
        templateUrl: 'templates/description.html',
        controller: "DescriptionController"
    })
    .otherwise({ redirectTo: "/" });
    $locationProvider.html5Mode(true);
}]);