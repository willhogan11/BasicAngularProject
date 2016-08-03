var myApp = angular.module('myApp', ['ngRoute', 'personController']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/personlist', {templateUrl: 'partials/personlist.html', controller: 'ListController'}).
		otherwise({redirectTo: '/personlist'});
}]);
