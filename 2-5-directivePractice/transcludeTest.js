/**
 * transcludeTest Module
 *
 * Description
 */
var myModule = angular.module('transcludeTest', []);
myModule.directive('hello', function() {
    return {
        restrict: 'E',
        template: '<div>hello transclude! <div ng-transclude></div></div>',
        transclude: true
    };
});