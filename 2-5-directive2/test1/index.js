var directiveApp = angular.module('directive',[])

directiveApp.directive('hello',function () {
    return{
        restrict:'EA',
        templateUrl:'hello.html',
        replace:true,

        compile:function () {

        },
        link:function () {

        }
    }
})
