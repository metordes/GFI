(function(){
    var app = angular.module('PruebaTecnicaApp',['PeliculaServiceApp','SesionServiceApp']);
    
    app.controller('PeliculaController', function ($scope, PeliculaService,SesionService) {
        var vm = $scope;

        vm.arFavoritos = [];
        vm.bPelicula = false;
        vm.bSesion_iniciada = false;
        vm.error_buscar = "";
        vm.nombre_pelicula = "";
        vm.obj_pelicula = {};
        vm.obj_sesion = {};
        vm.pass="";
        vm.usuario = "";

        vm.addFavorito = function (title) {
            if (typeof(Storage) !== "undefined") {
                vm.arFavoritos.push(title);
                localStorage.setItem("favorite",  vm.arFavoritos);
            } else {
                //error
            }
        };
        
        vm.buscarPelicula = function(){
            vm.obj_pelicula = {};
            vm.bPelicula = false;

            PeliculaService.buscar(vm.nombre_pelicula)
            .then(function(response){
                vm.obj_pelicula = response;
                vm.bPelicula = true;
            })
            .catch(function(response){
                vm.error_buscar = response;
            });
        };

        vm.comprobar_sesion = function () {
            vm.obj_sesion = SesionService.comprobar_sesion();
            if(vm.obj_sesion.sesion){
                vm.pass = vm.obj_sesion.pass;
                vm.bSesion_iniciada = vm.obj_sesion.sesion;
                vm.usuario = vm.obj_sesion.user;
            }
        }
        vm.iniciar_sesion =  () =>{
            SesionService.iniciar_sesion(vm.usuario,vm.pass);
        }

        vm.comprobar_sesion();

    });

}());