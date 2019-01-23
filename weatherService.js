app.factory('weatherService', function ($http) {
   
    return {
          weatherService1 : function(){
             return $http({
                 method: 'POST',  // POST method to create
                url: 'http://api.openweathermap.org/data/2.5/weather?appid=7b7295e44d9398d14962090d05202166&q=Davis'
            })
          },
          
          weatherService2 : function(){
           return $http({
                method: 'POST',
                url: 'http://api.openweathermap.org/data/2.5/weather?appid=7b7295e44d9398d14962090d05202166&q=Sacramento'
            })
         }
        }
    
    })
    
