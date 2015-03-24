/**
* scopeAndTest Module
*
* Description
*/
var myModule = angular.module('scopeAndTest', []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.sayHello = function(name) {
		alert("Hello"+name);
	};
}]);

myModule.directive('greeting', function(){
	return {
		restrict:'AE',
		scope:{
			greet:"&"
		},
		template:'<input type="text" ng-model="userName" /><br /><button ng-click="greet({name:userName})">Greeting</button><br/>'
	};
});