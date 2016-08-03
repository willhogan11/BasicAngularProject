var personController = angular.module("personController", []);

personController.controller("ListController", ["$scope", "$http", function($scope, $http){
	$http.get("js/person.json").success(function(data){
		$scope.persons = data;
	});
}]);


personController.controller("DetailsController", ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
	$http.get("js/person.json").success(function(data){
		$scope.persons = data;
	  	$scope.whichItem = $routeParams.itemId;
	});
}]);
