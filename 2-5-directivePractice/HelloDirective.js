/**
 * helloDirective Module
 *
 * Description
 */
var helloModule = angular.module('helloDirective', []);
helloModule.directive('hello', function() {
    return {
        restrict: 'AEMC', //匹配模式
        template: '<div>Hi everyone!</div>',
        replace: true
    };
}).directive('temptest', function() {
    return {
        restrict: 'E',
        templateUrl: 'tpls/tempTest.html',
        replace: true
    };
});