/**
 * scopeEqTest Module
 *
 * Description
 */
var myModule = angular.module('scopeEqTest', []);

myModule.controller('MyCtrl', ['$scope',
    function($scope) {
        $scope.ctrlFlavor = "baiwei";
    }
]);

myModule.directive('drink', function() {
    return {
        restrict: 'E',
        scope: {
            flavor: '='
        },
        template: '<input type="text" ng-model="flavor" />'
    };
});