/**
* myModule Module
*
* Description
*/
var myModule = angular.module('myModule', []);

myModule.run(function($templateCache) {
	$templateCache.put("aaaaaa","<div>hello cache!!</div>");
});

myModule.directive("cache",function($templateCache) {
	return{
		restrict:'E',
		template:$templateCache.get('aaaaaa'),
		replace:true
	};
});