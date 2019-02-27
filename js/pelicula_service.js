(function(){
    var app = angular.module('PeliculaServiceApp',[]);
    
    app.service('PeliculaService', function ($http, $q) {

        this.buscar = function (nombre_pelicula) {
            var defered = $q.defer();  
            var promise = defered.promise;

            $http.get("http://www.omdbapi.com/?apikey=f12ba140&t="+nombre_pelicula).then(function(response){
                if(response.data.Response === 'False')
                    defered.reject(response.data.Error);
                else 
                    defered.resolve(response.data);
            },function(response){
                defered.reject(response.data.Error);
            });
            return promise;
        }

        
    });

}());