angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService) {
	
	$scope.todo=[];
	$scope.elemento={opcion: "",numero: "",descripcion: "",fecha: ""};
	 $scope.opciones=["Futbol","Natacion","Voleibol","Basquetbol","Gimnasia","Atletismo"];	

	

	$scope.addActv = function(opcion,numero,descripcion,fecha){
		var item={
			opcion: opcion,
			numero: numero,
			descripcion: descripcion,
			fecha: fecha
			
			

		};
		$scope.todo.push(item);
		$scope.elemento.opcion="";
		$scope.elemento.numero="";
		$scope.elemento.descripcion="";
		$scope.elemento.fecha="";
		
		

		/*$scope.newActv={};*/
		
	}

	$scope.clean = function(){
		$scope.todo=[];
		
	}

	

});