/**
* myModule Module
*
* Description
*/
var myModule = angular.module('myModule', []);

//注射器加载完所有模块时，此方法执行一次
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