var myApp = angular.module('myApp', []);

myApp.controller("MyController", function MyController($scope){
	$scope.persons =
	[
		{
			"name": "Will Hogan",
			"shortname": "will",
			"age": 39,
			"address": "Galway",
			"favColour": "blue"
		},
		{
			"name": "Gillian Hogan",
			"shortname": "gill",
			"age": 36,
			"address": "Galway",
			"favColour": "green"
		},
		{
			"name": "Chris Hogan",
			"shortname": "chris",
			"age": 8,
			"address": "Galway",
			"favColour": "green"
		},
		{
			"name": "Olivia Hogan",
			"shortname": "olivia",
			"age": 7,
			"address": "Galway",
			"favColour": "teal"
		},
		{
			"name": "Ruairí Hogan",
			"shortname": "ruairí",
			"age": 3,
			"address": "Galway",
			"favColour": "grey"
		}
	]
});
