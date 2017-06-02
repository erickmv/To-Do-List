angular.module("MyFirstApp",[])
.controller("FirstController",function($scope,$http) {
	$scope.posts=[];
	$scope.newPost={};
	$http.get("http://jsonplaceholder.typicode.com/posts") 
		.then(function(response){
			$scope.posts = response.data;
    console.log(data);
});

		
		
	$scope.addPost=function(){
		$http.post("http://jsonplaceholder.typicode.com/posts",{
			title: $scope.newPost.title,
			body : $scope.newPost.body,
			userId: 1
		})

		.then(function(data,status,headers,config){
			console.log(data);
			$scope.posts.push($scope.newPost);
			$scope.posts.reverse();
			$scope.addPost={};

		})
		.then(function(error,data,status,headers,config){
			console.log(error);
		});
	}
});