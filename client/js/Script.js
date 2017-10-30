var app = angular.module('myApp', ['lbServices']);
app.controller('myCtrl', function($scope,Todo) {
	$scope.objs = Todo.find();
	$scope.list;
    console.log($scope.objs);
    $scope.firstName= "John";
    $scope.lastName= "Doe";

});