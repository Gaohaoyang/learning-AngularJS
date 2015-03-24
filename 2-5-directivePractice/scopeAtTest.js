/**
* scopeAtTest Module
*
* Description
*/
var myModule =angular.module('scopeAtTest', []);

myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor = "百威";
}]);

myModule.directive('drink', function(){
	return {
		restrict: 'AE', 
		scope:{
			flavor:'@'
		},
		template: '<div>{{flavor}}</div>',
		replace: true,
		/*link: function($scope, iElm, iAttrs, controller) {
			$scope.flavor = iAttrs.flavor;
		}*/
	};
});