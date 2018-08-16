angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        //home page
        .when('/',{
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/contact',{
            templateUrl:'views/contact.html',
            controller:'ContactController'
        })
        .when('/target',{
            templateUrl:'views/target.html',
            controller:'TargetController'
        })
        .otherwise({
            templateUrl: 'views/home.html',
            controller: 'MainController'
        });
        $locationProvider.html5mode(true);
}]);