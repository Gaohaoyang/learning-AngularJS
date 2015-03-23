/**
* replaceTest Module
*
* Description
*/
var myModule= angular.module('replaceTest', []);
myModule.directive('hello',function() {
	return{
		restrict:'E',
		template:'<div>hello replace</div>',
		replace:true,
		compile:function(){
			//自己可以设定编译方法，一般不使用
		},
		link:function(){
			//操作DOM元素
			//绑定事件
			//...
		}
	};
});