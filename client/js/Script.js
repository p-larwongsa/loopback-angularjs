var app = angular.module('App', ['lbServices']);
app.controller('Ctrl', function($scope,$filter,test) {
    $scope.datas = test.find();
    $scope.list;
    console.log(datas);
});
  
