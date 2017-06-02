angular.module("MyFirstApp",[])
.controller("FirstController",["$scope",function(variables){
	
	variables.nombre="ricardo";
	variables.apellido="mendez villalpando";
	variables.nuevoComentario={comentario: "este es definido"};
	variables.comentarios = [
	{
		comentario: "buen dia",
		username: "erick adrian"
	},
	{
		comentario: "buenas tardes",
		username: "ricardo"
	}
	];
	variables.agregarComentario=function(){
		variables.comentarios.push(variables.nuevoComentario);
	}
}]);
