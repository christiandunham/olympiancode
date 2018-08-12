//https://medium.com/@kasonjim/building-a-simple-full-stack-mean-application-part-2-79617860fb00
//name and array of other modules/dependencies
angular.module('olyCode',[
    'ngRoute'
])
.config(function($routeProvider,$locationProvider){
    //config takes function as arg, args here are provided by angular
    //if a route has a match in when, it does that
    $routeProvider
    .when('/home',{
        templateUrl: 'pages/page-home/home.html',
        controller:'HomeController'
    })
    .when('/target',{
        templateUrl: 'pages/page-target/target.html',
        controller: 'TargetController'
    })
    .when('/contact',{
        templateUrl: 'pages/page-contact/contact.html',
        controller: 'ContactController'
    })
    //anything else and it defaults to otherwise
    .otherwise({
        redirectTo: '/home'
    });
    $locationProvider.hashPrefix('');
});