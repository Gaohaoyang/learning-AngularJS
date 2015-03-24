/**
 * scopeTest Module
 *
 * Description
 */
var myModule = angular.module('scopeTest', []);

myModule.directive('hello', function() {
    return {
        restrict: 'E',
        scope: {},
        template: '<div><input type="text" ng-model="userName"/>{{userName}}</div>',
        replace: true,
    };
});