angular.module('appRoutes', [])
    .config(['$routeProvider', function($routeProvider){
    	$routeProvider
    	.when("/", {
    	    templateUrl: "views/main.html",
            controller: "MainController"
    	})
    	.when("/maps", {
            templateUrl: "views/maps.html",
            controller: "MapsController"
        })
        .otherwise({
            templateUrl: "views/main.html",
            controller: "MainController"
        });
    }]);
