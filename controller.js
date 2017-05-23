var app=angular.module("myApp",['ngRoute']);
app.config(["$locationProvider",function($locationProvider){
  $locationProvider.hashPrefix('')
}])
app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"pages/Features.html"
	})
	.when("/Employee",{
		templateUrl:"pages/Employee.html"
	})
	.when("/Filters",{
		templateUrl:"pages/Filters.html"
	})
}])
app.controller("myController",["$scope",function($scope){
      $scope.message="Angular JS All Features"
}])

app.controller("filterController",["$scope","providerService",function($scope,providerService){
	var filter=[
	            {name:"shiva",age:23,Gender:"Male",City:"Hyderabad"},
	            {name:"Kumar",age:23,Gender:"Male",City:"Bangalore"},
	            {name:"Arvind",age:25,Gender:"Male",City:"Chennai"},
	            {name:"shiva",age:25,Gender:"Male",City:"Hyderabad"},
                {name:"Rani",age:25,Gender:"Female",City:"Rajasthan"}
	];
	$scope.filters=filter
	$scope.products=providerService.getServiceDetails();
}])