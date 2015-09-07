app.controller('homeController', ['$scope', 'versionFactory', function($scope, versionFactory){
	$scope.version = versionFactory.version();
	$scope.developer = versionFactory.developer();
	$scope.webSite = versionFactory.webSite();
	$scope.githubName = versionFactory.githubName();
	$scope.githubUrl = versionFactory.githubUrl();
	$scope.name = "";
}]);