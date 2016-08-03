var personController = angular.module('personController', []);

personController.controller('ListController', ['$scope', '$http', function($scope, $http){
	$http.get('js/person.json').success(function(data){
		$scope.persons = data;
	});
}]);
