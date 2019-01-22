// module is similar to main() in other languages. it takes in its name and dependancies as param
var app = angular.module('weatherApp', []);
app.controller('weatherCantroller', function ($scope, $http) {

    $scope.weatherResult = {};  // Weather details about Davis
    $scope.weatherResult2 = {};  // Weather details aobut Sacramento

    $scope.funCall = function () {
        $scope.weatherService();
        $scope.weatherService2();
    }

    // WeatherService for Davis
    $scope.weatherService = function () {
        $http({
            method: 'POST',  // POST method to create
            url: 'http://api.openweathermap.org/data/2.5/weather?appid=7b7295e44d9398d14962090d05202166&q=Davis'
        }).then(function (response) {  // The HTTP response (response) is a network packet sent by the server responding to HTTP request
            $scope.weatherResult.cityName = response.data.name;
            $scope.weatherResult.condition = response.data.weather[0].main;
            $scope.weatherResult.Description = response.data.weather[0].description;
            $scope.weatherResult.IconUrl = "http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png";
            $scope.weatherResult.Wind = response.data.wind.speed;
            $scope.weatherResult.Gusts = response.data.wind.gust;
            $scope.weatherResult.Humidity = response.data.main.humidity;
            $scope.GetTemperature(response.data.main);

        }, function errorCallback(response) {
            $scope.ErrorResult = response;
        });
    }
});