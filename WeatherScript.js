// module is similar to main() in other languages. it takes in its name and dependancies as param
var app = angular.module('weatherApp', []);
app.controller('weatherController', function ($scope,weatherService) {

    $scope.weatherResult = {};  // Weather details about Davis
    $scope.weatherResult2 = {};  // Weather details aobut Sacramento

    $scope.funCall = function () {
        // $scope.weatherService();
        weatherService.weatherService1().then(function (response) {  // The HTTP response (response) is a network packet sent by the server responding to HTTP request
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

        weatherService.weatherService2().then(function (response) {
            $scope.weatherResult2.cityName = response.data.name;
            $scope.weatherResult2.condition = response.data.weather[0].main;
            $scope.weatherResult2.Description = response.data.weather[0].description;
            $scope.weatherResult2.IconUrl = "http://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png";
            $scope.weatherResult2.Wind = response.data.wind.speed;
            $scope.weatherResult2.Gusts = response.data.wind.gust;
            $scope.weatherResult2.Humidity = response.data.main.humidity;
            $scope.GetTemperature2(response.data.main);

        }, function errorCallback(response) {
            $scope.ErrorResult = response;
        });
    }


    // Get temp for the Davis
    $scope.GetTemperature = function (temps) {

        var FCurrent = $scope.GetFarenheit(temps.temp).toFixed(1);  // toFixed to fix to 1 decimal place
        var FLow = $scope.GetFarenheit(temps.temp_min).toFixed(1);
        var FHigh = $scope.GetFarenheit(temps.temp_max).toFixed(1);

        $scope.FTemps = [FCurrent, FLow, FHigh];

        var CCurrent = $scope.GetCelsius(temps.temp).toFixed(1);
        var CLow = $scope.GetCelsius(temps.temp_min).toFixed(1);
        var CHigh = $scope.GetCelsius(temps.temp_max).toFixed(1);

        $scope.CTemps = [CCurrent, CLow, CHigh];

        var KCurrent = $scope.GetKelvin(temps.temp).toFixed(1);
        var KLow = $scope.GetKelvin(temps.temp_min).toFixed(1);
        var KHigh = $scope.GetKelvin(temps.temp_max).toFixed(1);

        $scope.KTemps = [KCurrent, KLow, KHigh];

    }

    // Get temp for the Sacramento
    $scope.GetTemperature2 = function (temps) {

        var FCurrent = $scope.GetFarenheit(temps.temp).toFixed(1);
        var FLow = $scope.GetFarenheit(temps.temp_min).toFixed(1);
        var FHigh = $scope.GetFarenheit(temps.temp_max).toFixed(1);

        $scope.FTemps2 = [FCurrent, FLow, FHigh];

        var CCurrent = $scope.GetCelsius(temps.temp).toFixed(1);
        var CLow = $scope.GetCelsius(temps.temp_min).toFixed(1);
        var CHigh = $scope.GetCelsius(temps.temp_max).toFixed(1);

        $scope.CTemps2 = [CCurrent, CLow, CHigh];

        var KCurrent = $scope.GetKelvin(temps.temp).toFixed(1);
        var KLow = $scope.GetKelvin(temps.temp_min).toFixed(1);
        var KHigh = $scope.GetKelvin(temps.temp_max).toFixed(1);

        $scope.KTemps2 = [KCurrent, KLow, KHigh];

    }

    $scope.GetFarenheit = function GetFarenheit(temp) {
        return ((temp - 273) * (9 / 5)) + 32;
    };

    $scope.GetKelvin = function GetKelvin(temp) {
        return temp;
    };

    $scope.GetCelsius = function GetCelsius(temp) {
        return temp - 273;
    };

})
