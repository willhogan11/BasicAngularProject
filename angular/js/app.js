var myApp = angular.module("myApp", ["ngRoute", "personController"]);

myApp.config(["$routeProvider", function($routeProvider){
	$routeProvider.
		when("/personlist", {
			templateUrl: "partials/personlist.html",
			controller: "ListController"
		}).
		when("/personDetails", {
			templateUrl: "partials/personDetails.html",
		controller: "DetailsController"
		}).
		otherwise({
			redirectTo: "/personlist"
		});
}]);
