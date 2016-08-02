var myApp = angular.module("myApp", [
	"ngRoute",
	"personController"
]);

myApp.config(["$routeProvider", function($routeProvider){
	$routeProvider.
	when("/personList", {
		templateUrl: "partials/personList.html",
		controller: "ListController"
	}).
	otherwise({
		redirectTo: "/personList"
	});
}]);
