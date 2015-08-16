var app = angular.module('AppName', ['ngRoute'])
.config(function($routeProvider) {
	$routeProvider
	.when('/home', {
		controller:'homeController',
		templateUrl:'parts/home/home.html'
	})
	.otherwise({
		redirectTo:'/home'
	});
});