(function(){
    var app = angular.module('SesionServiceApp',[]);
    
    app.service('SesionService', function () {
        this.comprobar_sesion = function () {
            var objSesion = {
                user: "",
                pass:"",
                sesion: false
            }
            if(sessionStorage.getItem('sesion')){
                objSesion.user =  sessionStorage.getItem('usuario');
                objSesion.pass =  sessionStorage.getItem('pass');
                objSesion.sesion = true;
            }
            return objSesion;
        };

        this.iniciar_sesion = function (user, pass) {
            sessionStorage.setItem('sesion', true);
            sessionStorage.setItem('usuario', user);
            sessionStorage.setItem('pass', pass);
        }
    });

}());