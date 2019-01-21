var app = angular.module('weatherApp', []);
app.controller('weatherController', function ($scope, $http) {

    $scope.weatherResult = {};  // Weather details about Davis
    $scope.weatherResult2 = {};  // Weather details aobut Sacramento

    $scope.funCall = function () {
        $scope.weatherService();
        $scope.weatherService2();
    }
}